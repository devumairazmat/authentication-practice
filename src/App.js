import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { signUp } from "./firebase";
function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    try{
      e.preventDefault();
      await signUp(emailRef.current.value, passwordRef.current.value);
    }
    catch{
      alert("Error signing up");
    }
  }
  return (
    <>
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
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
          <Button className="m-2" variant="danger" type="reset">
            Reset
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default App;
