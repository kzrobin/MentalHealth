import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { MoodProvider } from "./context/MoodContext";

function App() {
  return (
    <MoodProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </MoodProvider>
  );
}

export default App;
