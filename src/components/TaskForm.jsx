import { useEffect, useState } from "react";
import "../styles/taskform.css";

function TaskForm({
  editingTask,
  onSubmit,
  onCancel,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      resetForm();
    }
  }, [editingTask]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      priority,
    });

    if (!editingTask) {
      resetForm();
    }
  };

  return (
    <div className="task-form">

      <h2>
        {editingTask ? "Update Task" : "Create New Task"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Title</label>

          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            disabled={editingTask !== null}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {editingTask && (
            <small className="hint">
              Title cannot be changed.
            </small>
          )}

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="6"
            placeholder="Enter description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

        </div>

        <div className="form-group">

          <label>Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="epic">Epic</option>
          </select>

        </div>

        <button className="primary-btn">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            className="secondary-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}

      </form>

    </div>
  );
}

export default TaskForm;