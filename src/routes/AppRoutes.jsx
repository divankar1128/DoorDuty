import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CustomerSignup from "../pages/CustomerSignup";
import ProfessionalSignup from "../pages/ProfessionalSignup";
import ServicePage from "../pages/ServicePage";
import HowItWorks from "../pages/HowItWorks";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
  path="/services/:slug"
  element={<ServicePage />}
/>
<Route
  path="/how-it-works"
  element={<HowItWorks />}
/>

<Route
  path="/signup/customer"
  element={<CustomerSignup />}
/>

<Route
  path="/signup/professional"
  element={<ProfessionalSignup />}
/>
      </Routes>
    </BrowserRouter>
  );
}