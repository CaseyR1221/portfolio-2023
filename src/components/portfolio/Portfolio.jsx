import { useRef } from "react";
import "./portfolio.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "addictioncenter.com",
    img: "/addictioncenter.png",
    desc: "Informational web guide for those who are struggling with substance use disorders, along with co-occurring behavioral and mental health disorders.",
    buttonText: "View Site",
    url: "https://www.addictioncenter.com/",
  },
  {
    id: 2,
    title: "Tasty Bytes",
    img: "/TastyBytes-Logo.jpg",
    desc: "A Front-End application leveraging HTML, CSS/Bulma, JavaScript, and the Spoonacular API to provide a list of recipes based off of the ingedients that the user has on hand.",
    buttonText: "View App",
    url: "https://caseyr1221.github.io/TastyBytes/",
  },
  {
    id: 3,
    title: "Employee Tracker",
    img: "/Employee-tracker-screenshot.jpeg",
    desc: "A Back-End command-line application that allows for the creation and tracking of employees, departments, and jobs using Node.js, and MySQL.",
    buttonText: "See Demo",
    url: "https://www.youtube.com/watch?v=OIX3NhLKwAc",
  },
  {
    id: 4,
    title: "Feedback-App",
    img: "/feedback_ui.png",
    desc: "A Front-End React.js application that allows the user to leave feedback items via the included form, and displays all items as cards. The Cards are also able to be deleted or updated by the user.",
    buttonText: "View App",
    url: "https://magical-bunny-a8bdeb.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a 
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.buttonText}
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

Single.propTypes = {
  item: PropTypes.object
}

export default Portfolio;