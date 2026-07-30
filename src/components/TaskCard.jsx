import "../styles/taskcard.css";

function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const getPriorityClass = (priority) => {
    switch (priority?.toLowerCase()) {
      case "low":
        return "priority low";

      case "medium":
        return "priority medium";

      case "high":
        return "priority high";

      case "epic":
        return "priority epic";

      default:
        return "priority";
    }
  };

  return (
    <div className="task-card">

      <div className="task-header">

        <div>

          <h2>{task.title}</h2>

          <p>{task.description}</p>

        </div>

        <span className={getPriorityClass(task.priority)}>
          {task.priority}
        </span>

      </div>

      <div className="task-footer">

        <div className="status-box">

          <label>Status</label>

          <select
            value={task.status}
            onChange={(e) =>
              onStatusChange(task.id, e.target.value)
            }
          >
            <option value="pending">Pending</option>

            <option value="in-progress">
              In Progress
            </option>

            <option value="completed">
              Completed
            </option>

          </select>

        </div>

        <div className="actions">

          <button
            className="edit-btn"
            onClick={() => onEdit(task)}
          >
            ✏ Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
          >
            🗑 Delete
          </button>

        </div>

      </div>

      <div className="task-date">

        Created :
        {" "}
        {task.createdAt
          ? new Date(task.createdAt).toLocaleDateString()
          : "N/A"}

      </div>

    </div>
  );
}

export default TaskCard;