import { FC, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useAuth } from "../../hooks/useAuth";

const Home: FC = () => {
  const { login } = useAuth();

  useEffect(() => {
    const performLogin = async () => {
      try {
        const response = await login({
          email: "akashtyagi245205@gmail.com",
          password: "Qazxsw@1234",
        });
        console.log("Login successful:", response);
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    performLogin();
  }, [login]);

  return (
    <Container fluid>
      <div>Hello world vite Akash Tyagi</div>
    </Container>
  );
};

export default Home;
