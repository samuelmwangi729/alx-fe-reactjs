import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

const App = () => {
  const styles = {
    width:'100%',
  }
  return (
    <div style={styles}>
      {/* New app.jsx  */}
      {/* <WelcomeMessage /> */}
      {/* <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
      <MainContent />
      <Footer /> */}
      <Counter/>
    </div>
  );
};

export default App;
