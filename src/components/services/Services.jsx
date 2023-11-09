import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Dedicated To Helping <span className="brand-text">Your Brand</span> Grow
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#05F0C5"}}>Technologies</motion.b> I&apos;m
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#05F0C5"}}>Skilled</motion.b> In.
          </h1>
          <button>
            <a href="#Contact">Contact Me</a>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box front"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>HandleBars</li>
          </ul>
        </motion.div>
        <motion.div
          className="box back"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Back-End</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Java</li>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </motion.div>
        <motion.div
          className="box database"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostGSQL</li>
          </ul>
        </motion.div>
        <motion.div
          className="box cms"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CMS</h2>
          <ul>
            <li>Wordpress</li>
            <li>Elementor</li>
          </ul>
        </motion.div>
        <motion.div
          className="box deployment"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Deployment</h2>
          <ul>
            <li>Heroku</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>AWS</li>
            <li>Firebase</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;