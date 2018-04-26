import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile">
        <button type="button" className="btn NormalBtn">
          <i className="fas fa-user-circle fa-2x" /> Edit Profile
        </button>
      </Link>
      {"  "}
      <Link to="/add-experience">
        <button className="btn NormalBtn">
          <i className="fas fa-film fa-2x" />
          {/* Add Experience */} Add Movies
        </button>
      </Link>
      {"  "}
      <Link to="/add-education">
        <button className="btn NormalBtn">
          <i className="fas fa-file-video fa-2x" />
          {/* Add Education */} My Must Watch
        </button>
      </Link>
    </div>
  );
};

export default ProfileActions;
