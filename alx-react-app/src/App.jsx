import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
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
