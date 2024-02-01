import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Landing from "./pages/landing_page";
import Signup from './pages/signup_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Landing/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
