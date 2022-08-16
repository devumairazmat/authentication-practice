import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { signUp, useAuth, login, logout } from "./firebase";

function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error signing up");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <>
     {/* <p>Currently logged in as: {currentUser?.emailRef} </p> */}
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            disabled={loading || currentUser}
            variant="primary"
            type="submit"
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Button
            className="m-2"
            variant="danger"
            disabled={loading || currentUser}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            className="m-2"
            variant="dark"
            disabled={loading || !currentUser}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default App;
