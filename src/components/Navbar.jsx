import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        Daily Task Tracker
      </div>

      <div className="nav-links">
        <button
          className="nav-btn"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className="nav-btn"
          onClick={() => navigate("/profile")}
        >
          My Profile
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;