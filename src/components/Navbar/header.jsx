import React, { useState } from "react";
import { Link } from "react-scroll";
import "./header.scss";
import logo from "./brain.png";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { BsPerson, BsFileEarmarkWord } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="img" /> <h3>PORTFOLIO</h3> <span>RP</span>
      </div>
      <ul className="list">
        {/* {["Home", "About", "Contact", "Project", "Skills", "Contact"].map(
          (item) => (
            <li className="list-items p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )} */}
        <li className="list-items p-text">
          <Link activeClass="active" spy to="Home">
            Home
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="About">
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="Work">
            Work
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="Skills">
            Skills
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="Education">
            Education
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="Contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* // icons-left */}
      <ul className="act-icons">
        <li className="list-items p-text">
          <Link title="Home" activeClass="act" spy to="Home">
            <FiHome />
          </Link>
        </li>
        <li>
          <Link activeClass="act" spy to="About" title="About">
            <BsPerson />
          </Link>
        </li>
        <li>
          <Link activeClass="act" spy to="Work" title="Work">
            <BsFileEarmarkWord />
          </Link>
        </li>
        <li>
          <Link activeClass="act" spy to="Skills" title="Skills">
            <BiServer />
          </Link>
        </li>
        <li>
          <Link activeClass="act" spy to="Education" title="Education">
            <FaGraduationCap />
          </Link>
        </li>
        <li>
          <Link activeClass="act" spy to="Contact" title="contact">
            <MdOutlineContactPage />
          </Link>
        </li>
      </ul>
      <div className="hamburger">
        <HiMenuAlt1 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["Home", "About", "Work", "Skills", "Education", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              )
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;
