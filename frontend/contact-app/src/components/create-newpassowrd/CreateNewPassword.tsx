import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "../auth-layout/AuthLayout";

const CreateNewPassword = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const passwordsMatch = form.password === form.confirmPassword;

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const formEl = event.currentTarget;
    event.preventDefault();

    if (formEl.checkValidity() === false || !passwordsMatch) {
      event.stopPropagation();
    } else {
      console.log("New password:", form.password);
      // call reset-password API here (token + password)
    }

    setValidated(true);
  };

  return (
    <AuthLayout
      title="Create new password"
      subtitle="Your new password must be different from previously used passwords."
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* New Password */}
        <Form.Group className="mb-3">
          <Form.Control
            required
            minLength={6}
            type="password"
            name="password"
            placeholder="New password"
            value={form.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least 6 characters
          </Form.Control.Feedback>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-4">
          <Form.Control
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            isInvalid={validated && !passwordsMatch}
          />
          <Form.Control.Feedback type="invalid">
            Passwords do not match
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          type="submit"
          className="w-100"
          style={{
            backgroundColor: "#6355e8",
            borderColor: "#6355e8",
          }}
        >
          Reset password
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default CreateNewPassword;
