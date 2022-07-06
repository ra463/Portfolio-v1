import React, { useState, useEffect } from "react";
import "./Education.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { GrShare } from "react-icons/gr";

const Education = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [certificate, setCertificate] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificate"]';

    client.fetch(query).then((data) => {
      setCertificate(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(certificate);
      } else {
        setFilterWork(certificate.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="Education">
      <h2 className="head-text-work">
        My <span>&nbsp;Certificates&nbsp;</span>&
        <span className="ui">&nbsp;Education</span>
      </h2>
      <div className="app__education-container">
        <span>Education</span>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__edu-sch"
        >
          <div className="school-box">
            <img src="/spring.png" alt="spring" />
            <h3>Spring Day H.S. School</h3>
          </div>
          <div className="school-desc">
            <p>Primary & Higher Secondary Schooling</p>
            <p>From Grade 1st to 12th</p>
            <h4>May 2007 - March 2020 || Jabalpur</h4>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__edu-sch"
        >
          <div className="school-box">
            <img src="/gyan.png" alt="gyan" />
            <h3>Gyan Ganga Institute of Technology & Science</h3>
          </div>
          <div className="school-desc">
            <p>Currently pursueing Bachelor Of Technology (B.Tech) Degree.</p>
            <p>Computer Science Engineering</p>
            <h4>April 2021 - Present || Jabalpur</h4>
          </div>
        </motion.div>
      </div>
      <div className="certificate-container">
        <span>Certificates</span>
        <div className="app__certificate">
          {["C/C++", "JavaScript", "Alibaba", "Others", "All"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => handleWorkFilter(item)}
                className={`app__certificate-filter-item app__flex p-text ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={work.title + index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.image)} alt="img" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  title="View"
                  href={work.codelink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 0.3 }}
                    className="app__flex"
                    style={{ color: "white" }}
                  >
                    <GrShare style={{ color: "white" }} />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-tag app__flex">
              <p className="p-text">{work.tags[0]}</p>
            </div>

            <div className="app__work-content app__flex">
              <h3 className="bold-text">{work.title}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
