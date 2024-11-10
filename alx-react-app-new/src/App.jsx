import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WelcomeMessage from "./components/Welcomemessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <MainContent />

      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
