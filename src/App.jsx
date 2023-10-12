import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import CreateChannel from "./pages/CreateChannel/CreateChannel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/create" element={<CreateChannel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
