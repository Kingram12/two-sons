import { Link, useHistory } from "react-router-dom";
import { Button, Card, Alert } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import classes from "./UserProfile.module.css";

const c = classes;

export default function UserNav() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out.");
    }
  }

  return (
      <Card.Body className={c.cardbody}>
        <p>
          <strong>Logged In As: </strong>
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser.email}
        </p>
        <div>
          <Link to="/update-profile" className="btn btn-primary">
            Update Profile
          </Link>
          <Button variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Card.Body>
  );
}
