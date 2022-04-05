import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { colorTheme } from "../../constants/colorTheme";
import Root from "../Root/index";

const App = () => {
  const [theme, setTheme] = useState(colorTheme.dark);

  const handleChangeBackground = () =>
    setTheme(() =>
      theme === colorTheme.dark ? colorTheme.light : colorTheme.dark
    );

  return (
    <div style={{ background: theme }} className="App">
      <Router>
        <Root changeBackground={handleChangeBackground} theme={theme} />
      </Router>
    </div>
  );
};

export default App;
