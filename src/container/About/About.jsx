import React, { useState, useEffect } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="head_text">
          {/* <div>
            Speclized in creating <span> Good</span> and <span> Nice</span>
            <br />
          </div>
          <div>
            <span className="ui">User Interface</span> with the help of{" "}
            <span className="ui">React</span>
          </div> */}
          <div>
           My <span>Awesome</span> <span className="ui">Services</span>
          </div>
        </h2>
        <div className="app__profile" id="About">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt="img" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
