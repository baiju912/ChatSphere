import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Loading1 from "../components/Loading1";
import ResetPasswordModal from "../components/modals/ResetPasswordModal";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login, setUser, isLogging } = useAuthStore();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = await login(form);
    if (!user) return;

    setUser(user);
    navigate(user.role === "admin" ? "/admin" : "/");
  };

  return (
    <>
      <div className="min-h-[90dvh] flex items-center justify-center bg-base-100 px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-base-200 w-full max-w-md rounded-2xl shadow-xl p-8"
        >
          {/* Header */}
          <h2 className="text-3xl font-bold text-center text-primary">
            Welcome Back
          </h2>
          <p className="text-center text-base-content/70 mt-2">
            Login to continue to your dashboard
          </p>

          {error && (
            <div className="bg-error/10 text-error p-3 rounded-lg mt-4 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div className="relative">
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

            {/* Password */}
            <div className="flex flex-col gap-1">
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

              <button
                type="button"
                onClick={() => setShowReset(true)}
                className="ml-auto text-xs text-base-content/60 hover:text-primary transition"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLogging}
              className="w-full py-3 rounded-xl bg-primary text-primary-content
                         font-semibold disabled:opacity-60 min-h-12"
            >
              {isLogging ? <Loading1 /> : "Login"}
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

          {/* OAUTH BUTTONS */}
          <div className="space-y-3">
            <button
              type="button"
              className="btn btn-outline w-full flex items-center gap-3"
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>
          </div>

          <p className="text-center text-sm text-base-content/60 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </motion.div>
      </div>

      {showReset && <ResetPasswordModal onClose={() => setShowReset(false)} />}
    </>
  );
};

export default Login;
