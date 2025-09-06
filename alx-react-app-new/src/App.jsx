import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

const App = () => {
  const styles = {
    width:'90%',
  }
  return (
    <div style={styles}>
      {/* New app.jsx  */}
      {/* <WelcomeMessage /> */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
