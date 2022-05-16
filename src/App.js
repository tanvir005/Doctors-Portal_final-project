import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path= "/about" element={<About></About>}> </Route>
        <Route path= "/appointment" element={<Appointment></Appointment>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
