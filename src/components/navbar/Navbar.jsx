import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="nav-contact"
          href="#Contact"
        >
          Contact Me
        </motion.a>
        <div className="social">
          <a href="https://github.com/CaseyR1221" target="_blank" rel="noreferrer">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/casey-rowlands-0311/" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.upwork.com/freelancers/~01ab35c3f9993f78cb" target="_blank" rel="noreferrer">
            <img src="/upwork2.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;