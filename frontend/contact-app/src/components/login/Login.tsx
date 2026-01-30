import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "../auth-layout/AuthLayout";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const formEl = event.currentTarget;
    event.preventDefault();

    if (formEl.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Login Data:", form);
      // call login API here
    }

    setValidated(true);
  };

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle={
        <>
          Don’t have an account? <a href="/sign-up">Sign up</a>
        </>
      }
    >
      <div className="d-grid gap-2 mb-3">
        <Button variant="outline-secondary">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width="18"
            className="me-2"
          />
          Continue with Google
        </Button>
      </div>

      <div className="text-center text-muted my-3">or</div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            required
            minLength={6}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 6 characters.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="w-100 mb-3"
          style={{ backgroundColor: "#8b8cf8", borderColor: "#8b8cf8" }}
        >
          Log In
        </Button>

        <div className="text-center">
          <a href="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default Login;
