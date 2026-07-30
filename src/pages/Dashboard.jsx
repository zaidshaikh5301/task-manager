import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import PriorityFilter from "../components/PriorityFilter";
import StatsCards from "../components/StatsCards";

import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch Tasks

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await api.get("/tasks");

      const taskData =
        res.data.tasks ||
        res.data.data ||
        res.data;

      setTasks(taskData);
    } catch (err) {
      console.log(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add / Update Task

  const handleSubmit = async (formData) => {
    try {
      if (editingTask) {
        await api.patch(`/tasks/${editingTask.id}`, {
          description: formData.description,
          priority: formData.priority,
        });
      } else {
        await api.post("/tasks", {
          title: formData.title,
          description: formData.description,
          priority: formData.priority,
        });
      }

      setEditingTask(null);

      fetchTasks();

    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  // Delete Task

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Delete this task?"
    );

    if (!ok) return;

    try {
      await api.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  // Edit

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };

  // Update Status

  const handleStatusChange = async (
    id,
    status
  ) => {
    try {
      await api.patch(
        `/tasks/${id}/status`,
        {
          status,
        }
      );

      fetchTasks();

    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  // Search + Filter

  const filteredTasks = useMemo(() => {
    let data = [...tasks];

    if (filter !== "all") {
      data = data.filter(
        (task) =>
          task.priority.toLowerCase() ===
          filter.toLowerCase()
      );
    }

    if (search.trim()) {
      data = data.filter(
        (task) =>
          task.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          task.description
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    return data;
  }, [tasks, filter, search]);

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="left-panel">

          <TaskForm
            editingTask={editingTask}
            onSubmit={handleSubmit}
            onCancel={cancelEdit}
          />

        </div>

        <div className="right-panel">

          <StatsCards tasks={tasks} />

          <div className="dashboard-header">

            <div>

              <h1>My Tasks</h1>

              <input
                className="search-box"
                type="text"
                placeholder="Search task..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            <PriorityFilter
              value={filter}
              onChange={setFilter}
            />

          </div>

          {loading ? (
            <div className="loading">
              Loading...
            </div>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={
                handleStatusChange
              }
            />
          )}

        </div>

      </div>
    </>
  );
}

export default Dashboard;