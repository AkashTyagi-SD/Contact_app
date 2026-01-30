import { FC, useEffect } from "react";
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
    <div className="home-welcome-screen">
      <div className="home-welcome-title">
        Welcome to Contact Management App
      </div>
      <div className="home-welcome-subtitle">
        Effortlessly manage your contacts, stay organized, and connect with
        ease.
        <br />
        Start exploring the features now!
      </div>
    </div>
  );
};

export default Home;
