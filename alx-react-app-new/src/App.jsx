import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WelcomeMessage from "./components/Welcomemessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      <Counter />

      <MainContent />

      <WelcomeMessage />
      <Footer />
    </>
  );
}

export default App;
