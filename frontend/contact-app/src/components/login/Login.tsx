import { useState, useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthLayout from "../auth-layout/AuthLayout";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginAction } from "../../store/slices/auth/auth.slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const formEl = event.currentTarget;
    event.preventDefault();

    if (formEl.checkValidity() === false) {
      event.stopPropagation();
    } else {
      await dispatch(loginAction(form));
    }
    setValidated(true);
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to home or dashboard after successful login
      navigate("/");
    }
  }, [isAuthenticated]);

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
          disabled={loading}
        >
          {loading ? <Spinner size="sm" /> : "Login"}
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
