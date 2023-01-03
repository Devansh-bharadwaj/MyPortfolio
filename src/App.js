import "./App.css";
// import Footer from "./PortfolioContainer/Home/Footer/Footer";
// import Profile from "./PortfolioContainer/Home/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./PortfolioContainer/AboutMe/Skills";
import Home from "./PortfolioContainer/Home/Home";
import Header from "./PortfolioContainer/Header/Header";
import Project from "./PortfolioContainer/Project/Project";
import Contact from "./PortfolioContainer/ContactMe/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/MyPortfolio" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
