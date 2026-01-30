import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "../auth-layout/AuthLayout";

const ForgotPassword = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");

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
      console.log("Reset email:", email);
      // call forgot-password API here
    }

    setValidated(true);
  };

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle={
        <>
          Remember password? <a href="/login">Sign in</a>
        </>
      }
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
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
          Verify Email
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default ForgotPassword;
