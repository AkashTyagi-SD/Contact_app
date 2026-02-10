import { FC } from "react";
import { useAppSelector } from "../../store/hooks";

const Home: FC = () => {
  const authStore = useAppSelector((state) => state.auth);
  const { isAuthenticated } = authStore;

  if (isAuthenticated) {
    return (
      <div className="home-welcome-screen">
        <div className="home-welcome-title">
          Welcome back to Contact Management App. You can manage your contacts
          here.
        </div>
      </div>
    );
  }

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
