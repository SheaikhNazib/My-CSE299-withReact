import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import Corporate from "./components/Corporate";
import Doctors from "./components/Doctors";
import Login from "./components/Login";
import Register from "./components/Register";
import Tests from "./components/Tests";
// import Admin from "./components/Admin";


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
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
