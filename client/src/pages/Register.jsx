import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Loading1 from "../components/Loading1";

const Register = () => {
  const navigate = useNavigate();
  const { register, isRegistering } = useAuthStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };

    const user = await register(payload);
    if (!user) return;

    navigate("/login");
  };

  return (
    <div className="min-h-[90dvh] flex items-center justify-center bg-base-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-base-200 w-full max-w-md md:max-w-lg rounded-2xl shadow-xl p-8 md:mt-12"
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-primary">
          Create Account
        </h2>
        <p className="text-center text-base-content/70 mt-2">
          Join the platform and get started
        </p>

        {error && (
          <div className="bg-error/10 text-error p-3 rounded-lg mt-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-base-content/40" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-base-300 bg-base-100
                         focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Email + Phone */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Email */}
            <div className="relative w-full">
              <FaEnvelope className="absolute left-4 top-4 text-base-content/40" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-base-300 bg-base-100
                 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative w-full">
              <FaPhoneAlt className="absolute left-4 top-4 text-base-content/40" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-base-300 bg-base-100
                 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative flex items-center">
            <FaLock className="absolute left-4 top-4 text-base-content/40" />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full pl-12 pr-12 py-3 rounded-xl border border-base-300 bg-base-100
                         focus:ring-2 focus:ring-primary outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 text-base-content/60 hover:text-primary"
            >
              {showPass ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-base-content/40" />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-base-100
                ${
                  form.confirmPassword && form.confirmPassword !== form.password
                    ? "border-error"
                    : "border-base-300"
                }
                focus:ring-2 focus:ring-primary outline-none`}
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            disabled={isRegistering}
            className="w-full py-3 rounded-xl bg-primary text-primary-content
                       font-semibold disabled:opacity-60 min-h-12"
          >
            {isRegistering ? <Loading1 /> : "Create Account"}
          </motion.button>
        </form>

        {/* OAUTH DIVIDER */}
        <div className="relative my-6">
          <div className="h-px bg-base-300" />
          <span
            className="absolute left-1/2 -translate-x-1/2 -top-3
            bg-base-200 px-3 text-xs text-base-content/60"
          >
            OR
          </span>
        </div>

        {/* OAUTH UI ONLY */}
        <button
          type="button"
          className="btn btn-outline w-full flex items-center gap-3"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-base-content/60 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
