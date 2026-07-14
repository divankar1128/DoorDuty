import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CustomerSignup from "../pages/CustomerSignup";
import ProfessionalSignup from "../pages/ProfessionalSignup";
import ServicePage from "../pages/ServicePage";
import HowItWorks from "../pages/HowItWorks";
import Membership from "../pages/Membership";
import ScrollToTop from "../components/ScrollToTop";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import ProfessionalDashboard from "../pages/professional/ProfessionalDashboard";
import ProfessionalBookings from "../pages/professional/ProfessionalBookings";
import ProfessionalEarnings from "../pages/professional/ProfessionalEarnings";
import ProfessionalProfile from "../pages/professional/ProfessionalProfile";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ProfessionalLogin from "../pages/ProfessionalLogin";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import CustomerBookings from "../pages/customer/CustomerBookings";
import CustomerMembership from "../pages/customer/CustomerMembership";


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
  path="/membership"
  element={<Membership />}
/>
<Route path="/about" element={<About />} />

<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/terms"
  element={<Terms />}
/>
<Route
  path="/professional/login"
  element={<ProfessionalLogin />}
/>

<Route
  path="/signup/customer"
  element={<CustomerSignup />}
/>
<Route
  path="/professional/dashboard"
  element={
    <ProtectedRoute>
      <ProfessionalDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/professional/bookings"
  element={
    <ProtectedRoute>
      <ProfessionalBookings />
    </ProtectedRoute>
  }
/>

<Route
  path="/professional/earnings"
  element={
    <ProtectedRoute>
      <ProfessionalEarnings />
    </ProtectedRoute>
  }
/>

<Route
  path="/professional/profile"
  element={
    <ProtectedRoute>
      <ProfessionalProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/customer/dashboard"
  element={<CustomerDashboard />}
/>
<Route
  path="/customer/bookings"
  element={<CustomerBookings />}
/>
<Route
  path="/customer/membership"
  element={<CustomerMembership />}
/>  
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}