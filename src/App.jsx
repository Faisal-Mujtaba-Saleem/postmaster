// Components Imports 
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";

// Individual Imports 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [buttonStyles, setButtonStyles] = useState({});

  const appName = "postmaster"
  return (
    <div className="App">
      <BrowserRouter >
        <header className="App-header">
          <Navbar appName={appName} setButtonStyles={setButtonStyles} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home buttonStyles={buttonStyles} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
