import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <div className="about" style={{ marginTop: 10 }}>
            Hi, I'm <strong>Praveen</strong>, a passionate Software Engineer
            with knowledge in versatile technologies involved in Full-stack
            development. I am enthusiastically ready to contribute technical
            expertise and work collaboratively as a team player.
            <div></div>
            <div style={{ marginTop: 10 }}>
              I create websites and applications, educate aspiring developers,
              and consistently embrace new technologies – that's what I believe
              in.
            </div>
          </div>
        </motion.div>
        <div className="about-resume" style={{ marginTop: 10 }}>
          You can find my detailed resume <strong>@</strong>
        </div>
        <a
          href="https://drive.google.com/file/d/1iu8ZlOFC-6TuND0RXqT8j-_Bj9waP9sB/view?usp=drivesdk"
          className="resume p-text"
          target="_blank"
        >
          My Resume
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primary"
);
