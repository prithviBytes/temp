import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css";

export default function Login() {
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login, user } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  async function handleAuth(event) {
    event.preventDefault();
    if (hasAccount) {
      if (await login()) {
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    } else {
      if (await register()) {
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    }
  }
  return (
    <div className="Login">
      <div className="Login-container">
        <form onSubmit={(event) => handleAuth(event)}>
          {!hasAccount && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          )}
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button>{hasAccount ? "Login" : "Create Account"}</button>
        </form>
        <button onClick={() => setHasAccount((state) => !state)}>
          {hasAccount ? "Create an Account?" : "Have an account?"}
        </button>
      </div>
    </div>
  );
}
