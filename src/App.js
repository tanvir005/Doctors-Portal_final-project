import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}> </Route>
        <Route path="/appointment" element={<RequireAuth><Appointment></Appointment></RequireAuth>}> </Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard ></Dashboard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>} />
          <Route path="review" element={<MyReviews />} />
          <Route path="allusers" element={<RequireAdmin><AllUsers /></RequireAdmin>} />
        </Route>
        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/signup" element={<Signup></Signup>}> </Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;