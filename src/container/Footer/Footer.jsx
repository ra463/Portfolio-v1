import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { client } from "../../client";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div id="Contact">
      <div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="contact-box"
        >
          <div>
            <p>Ready to get Started?</p>
            <p>Talk to me today....</p>
          </div>
          <a href="#contact-info-text">Let's Chat</a>
        </motion.div>
        <div className="Contact-container">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="social"
          >
            <h3>
              <span className="ui">Follow Me On</span> <br></br>
              <div>
                <span style={{ color: "#313bac" }}>Follow&nbsp;</span>Me On{" "}
                <span style={{ color: "#ff0157" }}>Various</span> <br></br>
                <span style={{ color: "var(--secondary-color)" }}>
                  Social Media
                </span>{" "}
                Platforms...
              </div>
            </h3>
            <ul>
              <li>
                <a
                  href="https://github.com/ra463"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub style={{ color: "black" }} />
                </a>
              </li>
              <li>
                <a
                  className="insta"
                  href="https://www.instagram.com/itzz_rp_here_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="www.linkedin.com/in/rachit-patel-3a6602209"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin style={{ color: "#0077b5" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/RachitInd?t=EqjyKXBUxs5UwsyEZPTFsg&s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter style={{ color: "#1DA1F2" }} />
                </a>
              </li>
            </ul>
          </motion.div>
          {!isFormSubmitted ? (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="contact-info-item"
              id="contact-info-text"
            >
              <div className="contact-card">
                <span>Leave Your Message</span>
                <form className="contact-form">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    required
                    value={name}
                    onChange={handleChangeInput}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    value={email}
                    onChange={handleChangeInput}
                  />
                  <textarea
                    placeholder="Your Message"
                    required
                    name="message"
                    value={message}
                    onChange={handleChangeInput}
                  />
                  <div className="contact-form-btn">
                    <button className="reset" type="reset">
                      Reset
                    </button>
                    <button
                      className="submit"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      {loading ? "sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <div className="submit-succes">
              <h3>Thanks for contacting me.</h3>
              <p> I will get back to you as soon as possible.</p>
            </div>
          )}
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="contact-social"
          >
            <span>Get In Touch</span>
            <div className="contact-info-text">
              <p>
                <img src="/gmail.png" alt="gmail" />
                <a href="mailto:rachitp509@gmail.com">rachitp509@gmail.com</a>
              </p>
              <p>
                <FcSmartphoneTablet />{" "}
                <a href="tel:+917009900991">+91-7009900991</a>
              </p>
            </div>
          </motion.div>
        </div>
        <hr></hr>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <p className="copyright">
            Copyright Ⓒ &nbsp;<a href="/">Portfolio RP</a> &nbsp; All Right
            Reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
