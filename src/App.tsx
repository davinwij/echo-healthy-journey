import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage';
import './App.css';
import AdminPage from './Components/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />        
        <Route path="/admin" element={<AdminPage />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
