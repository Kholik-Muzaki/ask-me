import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/chatPages";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route untuk Halaman Chat */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
