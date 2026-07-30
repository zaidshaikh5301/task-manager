import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Tasks Found</h2>
        <p>Create your first task.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default TaskList;