import { motion } from "framer-motion";
import { useAuthStore } from "../store/useAuthStore";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaCamera,
} from "react-icons/fa";

const Profile = () => {
  // mock user (replace with store / API data)
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-dvh bg-base-100 px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-200 rounded-3xl p-8 shadow border border-base-300"
        >
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-base-300 overflow-hidden flex items-center justify-center">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser className="text-5xl text-base-content/40" />
                )}
              </div>

              <button
                className="absolute bottom-1 right-1 btn btn-sm btn-primary btn-circle"
                title="Change photo"
              >
                <FaCamera />
              </button>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-base-content/70 mt-1">ChatSphere User</p>

              <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start">
                <span className="badge badge-primary badge-outline">
                  Active
                </span>
                <span className="badge badge-outline">Verified</span>
              </div>
            </div>

            {/* Action */}
            <div className="w-full sm:w-auto">
              <button className="btn btn-outline btn-block">
                Edit Profile
              </button>
            </div>
          </div>
        </motion.div>

        {/* ================= DETAILS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-200 rounded-3xl p-8 shadow border border-base-300"
        >
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Info icon={<FaEnvelope />} label="Email" value={user.email} />
            <Info icon={<FaPhone />} label="Phone" value={user.phone} />
            <Info
              icon={<FaCalendarAlt />}
              label="Joined"
              value={new Date(user.createdAt).toLocaleDateString()}
            />
          </div>
        </motion.div>

        {/* ================= SETTINGS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-base-200 rounded-3xl p-8 shadow border border-base-300"
        >
          <h2 className="text-xl font-semibold mb-6">Account Settings</h2>

          <div className="space-y-4">
            <button className="btn btn-outline w-full justify-start">
              Change Password
            </button>
            <button className="btn btn-outline w-full justify-start">
              Notification Settings
            </button>
            <button
              onClick={logout}
              className="btn btn-error w-full justify-start"
            >
              Logout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 bg-base-100 rounded-xl p-4 border border-base-300">
    <div className="text-primary text-xl">{icon}</div>
    <div>
      <p className="text-sm text-base-content/60">{label}</p>
      <p className="font-medium">{value || "Not provided"}</p>
    </div>
  </div>
);

export default Profile;
