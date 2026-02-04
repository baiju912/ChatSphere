import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import useUiStore from "../store/useUiStore";
import ThemeSelect from "./ThemeSelect";
import { useAuthStore } from "../store/useAuthStore";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { user } = useAuthStore();

  const [visible, setVisible] = useState(true);
  const { menuOpen, setMenuOpen } = useUiStore();

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // always show near top
      if (y < 80) {
        setVisible(true);
      }
      // scroll down → hide
      else if (y > lastScrollY.current) {
        setVisible(false);
        setMenuOpen(false);
      }
      // scroll up → show
      else {
        setVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavItem = ({ path, label }) => (
    <button
      onClick={() => {
        navigate(path);
        setMenuOpen(false);
      }}
      className={`text-sm font-medium transition cursor-pointer
        ${location === path ? "text-()" : "text-white hover:text-(--accent)"}`}
    >
      {label}
    </button>
  );

  return (
    <header
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.25s ease",
      }}
      className="fixed top-0 left-0 z-50 w-full bg-(--color-primary) text-(--primary-content) h-[10dvh]"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="h-full flex items-center justify-between px-4 md:px-8">
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer flex gap-1 items-center"
        >
          <img src={logo} alt="logo" className="w-16" />
          <p className="text-xl font-bold">ChatSphere</p>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {user ? (
            <>
              {" "}
              <NavItem path="/profile" label="Profile" />
            </>
          ) : (
            <>
              <NavItem path="/" label="Home" />
              <NavItem path="/about" label="About" />
              <NavItem path="/login" label="Login" />
              <NavItem path="/register" label="Register" />
              <ThemeSelect />
            </>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoCloseSharp size={28} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-(--primary) px-6 py-4 space-y-3 flex flex-col items-start rounded-b-2xl">
          {user ? (
            <>
              <NavItem path="/profile" label="Profile" />
            </>
          ) : (
            <>
              <NavItem path="/dashboard" label="Dashboard" />
              <NavItem path="/courses" label="Courses" />
              <NavItem path="/ai-tutor" label="AI Tutor" />
              <NavItem path="/analytics" label="Analytics" />
              <NavItem path="/settings" label="Settings" />
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
