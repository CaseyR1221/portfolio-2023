import { useRef } from "react";
import "./parallax.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2.5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <div className="textContainer">
        <motion.h1 style={{ y: yText }}>
          {type === "services" ? "What Can I Do?" : "What Have I Done?"}
        </motion.h1>
        <motion.img
          variants={scrollVariants}
          animate="scrollButton"
          src="/scroll.png"
          alt=""
        />
      </div>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

Parallax.propTypes = {
  type: PropTypes.string.isRequired
}

export default Parallax;