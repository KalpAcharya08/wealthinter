import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import missing components
import CreateAccount from './My Components/CreateAccount'; // Import the CreateAccount component
import Chatbot from './My Components/ChatBot';
import Home from './Pages/home'; // Corrected import for the Home component
import AssetDashboard from './My Components/AssetDashboard';
import MarketAssetsOverview from './My Components/MarketAssetsOverview';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          home
        </Link>
        <Link to="/create" style={styles.link}>
          Create Account
        </Link>
        <Link to="/chat" style={styles.link}>
          HelpSet
        </Link>
        <Link to="/AssetDashboard" style={styles.link}>
          My Asset
        </Link>
        <Link to="/MarketAssetsOverview" style={styles.link}>
          Assets
        </Link>
      </nav>

      {/* Define Routes */}
      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/AssetDashboard" element={<AssetDashboard />} />
          <Route path="/MarketAssetsOverview" element={<MarketAssetsOverview />} />
        </Routes>
      </div>
      
    </Router>

    
  );
}

// Inline Styles for Styling
const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    background: "#333",
    padding: "10px",
  },
  link: {
    color: "white",
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "18px",
  },
  container: {
    padding: "20px",
  },
};

export default App;