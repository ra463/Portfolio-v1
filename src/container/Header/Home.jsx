import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const resizeVarients = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div id="Home" className="app__header app__flex">
        <div className="app__header-box">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="app__header-info"
          >
            <div className="app__header-badge">
              <div className="badge-cmp app__flex">
                <span>👋</span>
                <div style={{ marginLeft: 20 }}>
                  <p className="text">Hey, I am</p>
                  <h1 className="head-text">Rachit Patel</h1>
                </div>
              </div>
              <div className="tag-cmp app__flex">
                <p className="text">Full Stack Web Developer</p>
                <p className="text">Looking For Oppurtunity</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeOut", delayChildren: 0.5 }}
            className="app__header-img"
          >
            <img src="/profile.png" alt="img" className="profile" />
            <motion.img
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="overlay_circle"
              src="/color.png"
              alt="img"
            />
          </motion.div>
        </div>
        <motion.div
          variant={resizeVarients}
          whileInView={resizeVarients.whileInView}
          className="app__header-circles"
        >
          <div className="circle-cmp app__flex">
            <img src="/react.png" alt="img" />
            <img src="/nodejs.png" alt="img" />
            <img src="/js.png" alt="img" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
