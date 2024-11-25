import "./Style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
