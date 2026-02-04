import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import useUiStore from "./store/useUiStore";
import Landing from "./pages/Landing";
import { useAuthStore } from "./store/useAuthStore";
import Loading from "./components/Loading";
import { useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { setMenuOpen } = useUiStore();
  const { user, checkAuth, isCheckingAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin");
    }
  }, [user]);

  if (isCheckingAuth) return <Loading />;
  return (
    <div
      className="pt-[10dvh] bg-base-100 text-base-content min-h-dvh"
      onClick={() => {
        setMenuOpen(false);
      }}
    >
      <Header />

      <Routes>
        <Route
          path="/"
          element={user?.role === "user" ? <Home /> : <Landing />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />

      <Toaster />
    </div>
  );
};

export default App;
