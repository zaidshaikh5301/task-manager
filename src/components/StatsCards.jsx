import "../styles/stats.css";

function StatsCards({ tasks }) {

  const total = tasks.length;

  const pending = tasks.filter(
    task => task.status === "pending"
  ).length;

  const progress = tasks.filter(
    task => task.status === "in-progress"
  ).length;

  const completed = tasks.filter(
    task => task.status === "completed"
  ).length;

  return (

    <div className="stats">

      <div className="card total">
        <h4>Total</h4>
        <h2>{total}</h2>
      </div>

      <div className="card pending">
        <h4>Pending</h4>
        <h2>{pending}</h2>
      </div>

      <div className="card progress">
        <h4>In Progress</h4>
        <h2>{progress}</h2>
      </div>

      <div className="card completed">
        <h4>Completed</h4>
        <h2>{completed}</h2>
      </div>

    </div>

  );

}

export default StatsCards;