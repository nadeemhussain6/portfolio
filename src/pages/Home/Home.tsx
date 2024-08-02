import profile_pic from "../../assets/user/nadeem.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import "./home.scss";

interface GetAnimationPropsTypes {
  opacity: number;
  y: number;
  scale: number;
  isVisible: boolean;
  duration: number;
}

const getAnimationProps = ({
  opacity,
  y,
  scale,
  isVisible,
  duration,
}: GetAnimationPropsTypes) => {
  return {
    initial: { opacity: 0, y: -50, scale: 0.8 },
    animate: {
      opacity: isVisible ? opacity : 0,
      y: isVisible ? y : -50,
      scale: isVisible ? scale : 0.8,
    },
    transition: { duration },
  };
};

const Home = () => {
  const isVisible = true;

  const animationProps = getAnimationProps({
    opacity: 1,
    y: 0,
    scale: 1,
    isVisible,
    duration: 3,
  });

  return (
    <>
      <div>
        <div className="home">
          <div className="home_container">
            <motion.div {...animationProps} className="home_user_info">
              <motion.h1
                initial={{ opacity: 0, y: -100, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: [0, -30, 0, -15, 0],
                  scale: [0.8, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="heading"
              >
                Hello!👋
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: -500, scale: 0.1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.5 }}
                className=" sub_heading"
              >
                I'm Nadeem Hussain
              </motion.h1>
              <h1 className=" sub_heading_work">Data Analyst | BI developer</h1>
              <p className="sub_heading_description">
                A dedicated Data Analyst and BI Developer with extensive
                experience in data analysis, data visualization, and
                expert-level proficiency in building dashboards using Excel,
                Power BI, Tableau, and Lumenore.
              </p>
              <div className="social_links">
                <a href="" style={{ background: "blue", color: "white" }}>
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/nadeem_h_official?igsh=MXR5aXZuMjNnM2FhbQ=="
                  style={{ background: "red", color: "white" }}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Nadeem990/Nadeem990"
                  style={{ background: "black", color: "white" }}
                >
                  <FaGithub />
                </a>
                <a
                  href=" https://www.facebook.com/profile.php?id=100004680947722"
                  style={{ background: "blue", color: "white" }}
                >
                  <FaFacebookF />
                </a>
              </div>
              <div className="home_btn">
                <button>Resume</button>
                <button>Contact Me</button>
              </div>
            </motion.div>
            <div className="home_user_profile">
              <img src={profile_pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
