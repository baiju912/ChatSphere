import { motion } from "framer-motion";
import { FaUsers, FaBolt, FaLock } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-base-100 text-base-content">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary"
        >
          About ChatSphere
        </motion.h1>

        <p className="mt-6 text-lg text-base-content/70 max-w-3xl mx-auto">
          ChatSphere is a modern real-time chat application designed to make
          conversations fast, secure, and effortless — whether you’re chatting
          one-on-one or collaborating in groups.
        </p>
      </section>

      {/* MISSION */}
      <section className="bg-base-200">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              Our mission is simple: build a chat platform that feels instant,
              intuitive, and reliable. We focus on performance, clean UI, and
              strong security so users can communicate without friction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="p-5 rounded-xl bg-base-100 shadow">
              ⚡ Real-time messaging with zero lag
            </div>
            <div className="p-5 rounded-xl bg-base-100 shadow">
              🔒 Secure authentication & privacy-first design
            </div>
            <div className="p-5 rounded-xl bg-base-100 shadow">
              🎯 Clean UI focused on usability
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ChatSphere?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-base-200 rounded-2xl p-6 shadow-md"
          >
            <FaBolt className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Real-Time</h3>
            <p className="text-base-content/70">
              Messages are delivered instantly using real-time technologies.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-base-200 rounded-2xl p-6 shadow-md"
          >
            <FaLock className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
            <p className="text-base-content/70">
              Authentication, protected routes, and privacy-focused architecture.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-base-200 rounded-2xl p-6 shadow-md"
          >
            <FaUsers className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Built for People</h3>
            <p className="text-base-content/70">
              Designed to scale from casual chats to team conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-content">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start chatting without limits
          </h2>
          <p className="mb-6 text-primary-content/80">
            Join ChatSphere today and experience real-time communication done
            right.
          </p>
          <a
            href="/register"
            className="btn btn-secondary btn-wide"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;