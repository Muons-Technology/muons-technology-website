import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages and components
import HomeScreen from "./pages/HomeScreen";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
