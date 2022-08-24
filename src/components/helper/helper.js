import { Link, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const ShowError = ({ error }) => {
  return (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
};
export const ShowSuccess = ({ success, successMessage, link, label }) => {
  return (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      {successMessage} <Link to={link}>{label}</Link>
    </div>
  );
};

export const RedirectUser = ({ redirect }) => {
  if (redirect) return <Navigate to="/" />;
};

export function getCurrentUser() {
  try {
    const jwtToken = localStorage.getItem("jwt");
    return jwtDecode(jwtToken);
  } catch (error) {
    return null;
  }
}
