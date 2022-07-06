import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineHtml5 } from "react-icons/ai";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../../client";
import {
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiRedux, SiFirebase } from "react-icons/si";
import "./skills.scss";

const SkillsCon = [
  {
    name: "HTML",
    Color: "rgb(255 77 0)",
    bgc: "rgb(225 95 38 / 33%)",
    icon: <AiOutlineHtml5 />,
  },
  {
    name: "CSS",
    Color: "rgb(0 76 255)",
    bgc: "rgb(41 98 232 / 31%)",
    icon: <FaCss3Alt />,
  },
  {
    name: "SASS",
    Color: "rgb(230 68 148)",
    bgc: "rgb(198 98 147 / 35%)",
    icon: <FaSass />,
  },
  {
    name: "JavaScript",
    Color: "#e4cd37",
    bgc: "#f0db4f57",
    icon: <IoLogoJavascript />,
  },
  {
    name: "React JS",
    Color: "rgb(0 200 255)",
    bgc: "rgb(97 217 250 / 47%)",
    icon: <FaReact />,
  },
  {
    name: "Node JS",
    Color: "rgb(73 163 65)",
    bgc: "rgb(102 161 97 / 33%)",
    icon: <FaNodeJs />,
  },
  {
    name: "npm",
    Color: "rgb(203 25 24)",
    bgc: "rgb(204 53 52 / 32%)",
    icon: <FaNpm />,
  },
  {
    name: "MongoDB",
    Color: "rgb(37 167 26)",
    bgc: "rgb(63 160 55 / 31%)",
    icon: <SiMongodb />,
  },
  {
    name: "Redux",
    Color: "rgb(106 62 175)",
    bgc: "rgb(118 74 188 / 35%)",
    icon: <SiRedux />,
  },
  {
    name: "Firebase",
    Color: "rgb(255 129 0)",
    bgc: "rgb(245 130 13 / 38%)",
    icon: <SiFirebase />,
  },
  {
    name: "AWS",
    Color: "rgb(255, 153, 0)",
    bgc: "rgb(255 153 0 / 34%)",
    icon: <FaAws />,
  },
  {
    name: "Git",
    Color: "#f84c29",
    bgc: "#f1502f54",
    icon: <FaGitAlt />,
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  const test = experiences[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div id="Skills">
      <h2 className="head-text-work">
        My <span>&nbsp;Skills&nbsp;</span>&
        <span className="ui">&nbsp;Experience</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <span>Skills</span>
          <div className="app__skills-desc">
            {SkillsCon.map((skill) => (
              <motion.div
                className="app__skills app__flex"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ color: skill.Color, backgroundColor: skill.bgc }}
                >
                  {skill.icon}
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="app__skills-items app__flex"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="para">
              <p className="p-text">
                ⚡ Crazy Web developers who build websites and ensure they
                perform reliably and efficiently.
              </p>
              <p className="p-text">
                ⚡ Develop highly interactive Front end/User Interfaces for your
                Web and Mobile App.
              </p>
              <p className="p-text">
                ⚡ Integration of third party services for DataBase Management.
              </p>
              <p className="p-text">
                ⚡ Develop highly interactive Back end APIs for your Web and
                Mobile App.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <span className="ex-p">Experience</span>
      {experiences.length && (
        <div className="app__skills-exp-container">
          <motion.div className="app__skills-exp">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-exp-work"
              // key={exp.name}
            >
              <div className="first-container">
                <div>
                  <img src={urlFor(test.img)} alt="exp" />
                  <h3 className="p-text">{test.name}</h3>
                </div>
                <p>{test.job}</p>
              </div>
              <p className="p-title">{test.title}</p>
              <ul>
                {test.description.map((descrip) => (
                  <li className="desc">{descrip}</li>
                ))}
              </ul>
              <p className="p-date">{test.date}</p>
            </motion.div>
            <div className="app__experience app__flex">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? experiences.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === experiences.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Skills;
