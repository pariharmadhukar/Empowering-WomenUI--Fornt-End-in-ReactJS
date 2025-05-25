import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Events from "./pages/Events";
import FinancialDashboard from "./pages/FinancialDashboard";
import SkillDevelopment from "./pages/SkillDevelopment";
import Safety from "./pages/Safety";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";

import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import ResourceManagement from "./pages/ResourceManagement";
import EventManagement from "./pages/EventManagement";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function Layout({ children }) {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/reset-password" ||
    location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {!hideNavbarFooter && <Navbar />}
      <main
        className={`container mx-auto px-4 py-8 ${
          !hideNavbarFooter ? "mt-12" : "mt-0"
        }`}
      >
        {children}
      </main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AdminRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="resources" element={<ResourceManagement />} />
                    <Route path="events" element={<EventManagement />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </AdminLayout>
              </AdminRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route
            path="/financial-dashboard"
            element={
              <ProtectedRoute>
                <FinancialDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route
            path="/safety"
            element={
              <ProtectedRoute>
                <Safety />
              </ProtectedRoute>
            }
          />

          <Route path="/reset-password" element={<ChangePassword />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
