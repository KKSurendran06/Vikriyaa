import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Landing from "./pages/landing_page";
import About from "./pages/about_us";
import Impact from "./pages/our_impact";
import Join from "./pages/join_us";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/impact' element={<Impact/>} />
      </Routes>
    </Router>
  );
}

export default App;
