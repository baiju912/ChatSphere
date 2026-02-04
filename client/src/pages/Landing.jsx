import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaLock,
  FaUsers,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

const Landing = () => {
  return (
    <div className="bg-base-100 text-base-content overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[90dvh]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Simple. Secure. <br />
            <span className="text-primary">Real-Time Chat</span>
          </h1>

          <p className="mt-6 text-lg text-base-content/70 max-w-xl">
            ChatSphere lets you communicate instantly with people you trust.
            Built for speed, privacy, and modern collaboration.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/register" className="btn btn-primary btn-lg">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline btn-lg">
              Login
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-base-200 rounded-3xl shadow-xl p-6 border border-base-300">
            <div className="space-y-3">
              <div className="bg-base-100 p-4 rounded-xl shadow text-sm">
                👋 Hey! Are we meeting today?
              </div>
              <div className="bg-primary text-primary-content p-4 rounded-xl shadow text-sm ml-auto w-fit">
                Yes! 5 PM works 👍
              </div>
              <div className="bg-base-100 p-4 rounded-xl shadow text-sm">
                Perfect. See you then!
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-base-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why ChatSphere?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature
              icon={<FaBolt />}
              title="Lightning Fast"
              desc="Instant real-time messaging powered by modern web technologies."
            />
            <Feature
              icon={<FaLock />}
              title="Secure by Default"
              desc="JWT authentication, protected routes, and privacy-first design."
            />
            <Feature
              icon={<FaUsers />}
              title="Built for Teams"
              desc="Perfect for 1-to-1 chats or growing communities."
            />
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Designed for Modern Devices
          </h2>
          <p className="text-base-content/70 mb-8">
            ChatSphere works seamlessly across desktops, tablets, and mobile
            devices. Clean UI, responsive layout, zero clutter.
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3 items-center">
              <FaMobileAlt className="text-primary" />
              Fully responsive UI
            </li>
            <li className="flex gap-3 items-center">
              <FaCloud className="text-primary" />
              Cloud-ready & scalable
            </li>
            <li className="flex gap-3 items-center">
              <FaLock className="text-primary" />
              Secure sessions
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-base-200 rounded-3xl p-8 shadow"
        >
          <div className="h-64 flex items-center justify-center text-base-content/50">
            {/* Placeholder for illustration / animation */}
            Chat UI Preview
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-primary-content py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start chatting today
          </h2>
          <p className="text-primary-content/80 mb-8">
            Create an account and experience real-time messaging without
            distractions.
          </p>

          <Link to="/register" className="btn btn-secondary btn-lg">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-base-100 rounded-2xl p-8 shadow-md border border-base-300"
  >
    <div className="text-primary text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-base-content/70">{desc}</p>
  </motion.div>
);

export default Landing;