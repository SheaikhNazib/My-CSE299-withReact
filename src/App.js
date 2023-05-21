import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import Corporate from "./components/Corporate";
import Doctors from "./components/Doctors";
import Login from "./components/Login";
import Register from "./components/Register";
// import Admin from "./components/Admin";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
