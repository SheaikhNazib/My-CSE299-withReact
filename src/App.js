import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import Corporate from "./components/Corporate";
import Doctors from "./components/Doctors";
import Login from "./components/Login";
import Register from "./components/Register";
import Tests from "./components/Tests";
import Admin from "./components/Admin";
import Admin_doctors from "./components/Admin_doctors";
import Admin_users from "./components/Admin_users";
import Admin_tests from "./components/Admin_tests";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="tests" element={<Tests />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Admin />} />
          <Route path="admin_doctors" element={<Admin_doctors />} />
          <Route path="admin_users" element={<Admin_users />} />
          <Route path="admin_tests" element={<Admin_tests />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
