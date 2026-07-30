import "../styles/filter.css";

function PriorityFilter({ value, onChange }) {
  return (
    <div className="filter">

      <label>Filter by Priority</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="epic">Epic</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

    </div>
  );
}

export default PriorityFilter;