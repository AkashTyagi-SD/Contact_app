import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "../auth-layout/AuthLayout";

const Signup = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
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
      console.log("Signup Data:", form);
      // call signup API here
    }

    setValidated(true);
  };

  return (
    <AuthLayout
      title="Seconds to sign up!"
      subtitle={
        <>
          Already have an account? <a href="/login">Sign in</a>
        </>
      }
    >
      <div className="d-grid mb-3">
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
        {/* Full Name */}
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="text"
            name="fullName"
            placeholder="Full name"
            value={form.fullName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Full name required
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Work email"
            value={form.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-4 position-relative">
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
            Password must be at least 6 characters
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "#9b9cfb",
            borderColor: "#9b9cfb",
          }}
        >
          Sign up with Email
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default Signup;
