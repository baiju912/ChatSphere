import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiLock, FiHash, FiLoader } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";

const ResetPasswordModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    try {
      setLoading(true);
      await api.post("/auth/gen-otp", { email: form.email });
      toast.success("OTP sent");
      setStep(2);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      await api.post("/auth/verify-otp", {
        email: form.email,
        otp: form.otp,
      });
      toast.success("OTP verified");
      setStep(3);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async () => {
    if (form.newPassword !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);
      await api.put("/auth/reset-password", form);
      toast.success("Password changed successfully");
      onClose();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Password change failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-base-100 text-base-content w-full max-w-md
                     rounded-2xl shadow-xl p-6 relative"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 btn btn-ghost btn-sm"
          >
            <FiX size={18} />
          </button>

          {/* HEADER */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">Change Password</h2>
            <p className="text-sm text-base-content/60">
              Secure your admin account
            </p>
          </div>

          {/* STEP 1: EMAIL */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="input input-bordered flex items-center gap-3">
                <FiMail className="opacity-50" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  className="grow"
                />
              </label>

              <button
                onClick={sendOtp}
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          )}

          {/* STEP 2: OTP */}
          {step === 2 && (
            <div className="space-y-4">
              <label className="input input-bordered flex items-center gap-3">
                <FiHash className="opacity-50" />
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={form.otp}
                  onChange={handleChange}
                  className="grow"
                />
              </label>

              <button
                onClick={verifyOtp}
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  "Verify OTP"
                )}
              </button>
            </div>
          )}

          {/* STEP 3: PASSWORD */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="input input-bordered flex items-center gap-3">
                <FiLock className="opacity-50" />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="grow"
                />
              </label>

              <label className="input input-bordered flex items-center gap-3">
                <FiLock className="opacity-50" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="grow"
                />
              </label>

              <button
                onClick={changePassword}
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  "Change Password"
                )}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResetPasswordModal;