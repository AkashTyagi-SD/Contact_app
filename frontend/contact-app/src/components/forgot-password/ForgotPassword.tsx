import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthLayout from "../auth-layout/AuthLayout";

const ForgotPassword = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"EMAIL" | "OTP">("EMAIL");

  const handleEmailSubmit = async (event: any) => {
    event.preventDefault();
    const formEl = event.currentTarget;

    if (formEl.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      // 🔥 Call verify email / forgot password API
      console.log("Verify email:", email);

      // await authService.forgotPassword(email);

      // ✅ On success → show OTP screen
      setStep("OTP");
      setValidated(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOtpSubmit = async (event: any) => {
    event.preventDefault();

    try {
      console.log("Verify OTP:", otp);

      // await authService.verifyOtp({ email, otp });

      // 👉 navigate to reset password page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout
      title={step === "EMAIL" ? "Forgot your password?" : "Verify OTP"}
      subtitle={
        step === "EMAIL" ? (
          <>
            Remember password? <a href="/login">Sign in</a>
          </>
        ) : (
          <>
            OTP sent to <strong>{email}</strong>
          </>
        )
      }
    >
      {step === "EMAIL" && (
        <Form noValidate validated={validated} onSubmit={handleEmailSubmit}>
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

          <Button type="submit" className="w-100">
            Verify Email
          </Button>
        </Form>
      )}

      {step === "OTP" && (
        <Form onSubmit={handleOtpSubmit}>
          <Form.Group className="mb-4">
            <Form.Control
              required
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Verify OTP
          </Button>
        </Form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
