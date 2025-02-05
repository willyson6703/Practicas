import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyCuriosities from "./pages/MyCuriosities";
import NewCuriosity from "./pages/NewCuriosity";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-curiosities" element={<MyCuriosities />} />
          <Route path="/new-curiosity" element={<NewCuriosity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
