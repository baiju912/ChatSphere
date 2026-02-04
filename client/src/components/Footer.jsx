import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-base-200 text-base-content"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <img src={logo} alt="logo" className="w-20 mb-3" />
          <p className="text-sm text-base-content/70 leading-relaxed">
            ChatSphere is a real-time messaging platform built for fast,
            secure, and seamless conversations. Stay connected anytime,
            anywhere with end-to-end messaging reliability.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Product
          </h3>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>
              <Link to="/chats" className="hover:text-primary transition">
                Chats
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-primary transition">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/groups" className="hover:text-primary transition">
                Groups
              </Link>
            </li>
            <li>
              <Link to="/calls" className="hover:text-primary transition">
                Calls
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-primary transition">
                Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Meta */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:text-primary transition">
                Security
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-primary transition">
                Support
              </Link>
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/60">
        © {new Date().getFullYear()} ChatSphere. All rights reserved.
        <span className="block mt-1">
          Built for real-time conversations 💬
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;