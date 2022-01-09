import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teacher from "./Pages/Teacher";
import Head from "./Pages/Head";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/head" element={<Head />} />
    </Routes>
  );
}

export default App;
