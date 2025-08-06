import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Archive from "./pages/Archive";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ margin: "1rem", textAlign: "center" }}>
          <Link to="/" style={{ marginRight: "1rem", textDecoration: "none", color: "#00ffe7" }}>
            Home
          </Link>
          <Link to="/about" style={{ marginRight: "1rem", textDecoration: "none", color: "#00ffe7" }}>
            About
          </Link>
          <Link to="/archive" style={{ textDecoration: "none", color: "#00ffe7" }}>
            Archive
          </Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
