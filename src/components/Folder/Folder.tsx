import xBtn from "../../assets/icons/x-btn.svg";
import msFolder from "../../assets/icons/ms-folder.svg";
import snapsFolder from "../../assets/icons/snaps-folder.svg";
import instockFolder from "../../assets/icons/instock-folder.svg";
import githubLogo from "../../assets/icons/github-mark.png";
import linkedinLogo from "../../assets/icons/linkedin-logo.png";
import email from "../../assets/icons/email.svg";
import email2 from "../../assets/icons/email2.svg";
import location from "../../assets/icons/location.svg";
import profileImg from "../../assets/icons/profile-image.png";
import "./Folder.scss";

interface FolderProps {
  selectedApp: string;
  setSelectedApp: (value: string) => void;
}

export default function Folder({ selectedApp, setSelectedApp }: FolderProps) {
  if (!selectedApp) return null;

  const handleCloseWindow = () => {
    setSelectedApp("");
  };

  return (
    <>
      {selectedApp === "webDev" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title ">Web Development</h4>
                  </div>
                  <p className="note__tag ">
                    Skills: JavaScript, TypeScript, React, HTML5, CSS3/SCSS,
                    Responsive Design, Node.js, Express.js, RESTful API, AI
                    Implementation, MySQL, Git/GitHub
                  </p>
                  <p className="note__tag">
                    Education: Diploma, Software Engineering, BrainStation Nov
                    2024 - Feb 2025
                  </p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  onClick={handleCloseWindow}
                  src={xBtn}
                  alt="x button"
                />
              </div>
              <div className="note__front-bottom folder__bottom ">
                <p className="note__text folder__projects-title">Projects:</p>
              </div>
              <div className="folder__projects">
                <div className="folder__project">
                  <img
                    className="folder__project-icon"
                    src={msFolder}
                    alt="Microsoft Project"
                  />
                  <p className="folder__project-text">
                    AI-Powered <br /> Small Business Tool
                  </p>
                </div>
                <div className="folder__project">
                  <img
                    className="folder__project-icon"
                    src={snapsFolder}
                    alt="Snaps Project"
                  />
                  <p className="folder__project-text">
                    Photo Sharing
                    <br /> App
                  </p>
                </div>
                <div className="folder__project">
                  <img
                    className="folder__project-icon"
                    src={instockFolder}
                    alt="In-Stock Project"
                  />
                  <p className="folder__project-text">
                    Inventory Management
                    <br /> System
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {selectedApp === "socialMedia" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title ">
                      Social Media & Influencer Marketing
                    </h4>
                  </div>
                  <p className="note__tag ">
                    Skills: Social Media Strategy, Influencer Marketing, Content
                    Creation, Mobile Video Editing, Canva Graphic Design, UGC
                  </p>
                  <p className="note__tag ">Experience: Six years</p>
                  <p className="note__tag">
                    Education: Advanced Diploma, Business Admin - Project
                    Management, George Brown College Jan 2014 - Dec 2016
                  </p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  onClick={handleCloseWindow}
                  src={xBtn}
                  alt="x button"
                />
              </div>
              <div className="note__front-bottom folder__bottom ">
                <p className="note__text folder__projects-title">
                  Projects coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      {selectedApp === "contactMe" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title ">Get In Touch</h4>
                  </div>
                  <p className="note__tag ">Like what you see?</p>
                  <p className="note__tag">
                    <span className="crossed-text">Send me a fax</span> Let's
                    connect and discuss your project!
                  </p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  onClick={handleCloseWindow}
                  src={xBtn}
                  alt="x button"
                />
              </div>
              <div className="note__front-bottom ">
                <div className="folder__main-text">
                  <div className="folder__main-group">
                    <img
                      className="folder__profile-pic"
                      src={profileImg}
                      alt="profile image"
                    />
                    <p className="folder__text">
                      I'm open to projects in{" "}
                      <i>full-stack web development, </i>
                      <i> social media strategy</i>,{" "}
                      <i> influencer marketing</i>, and <i>content creation</i>{" "}
                      to help businesses and entrepreneurs establish and elevate
                      their digital presence with custom-built websites and
                      engaged online community.
                    </p>
                  </div>

                  <div className="folder__contact">
                    <img
                      className="folder__project-icon--small"
                      src={email2}
                      alt="location icon"
                    />
                    <p className="folder__small-text">Vancouver, BC, Canada</p>
                  </div>
                  <a
                    href="mailto:julia.bbchv@gmail.com"
                    className="folder__contact folder__contact--email"
                  >
                    <img
                      className="folder__project-icon--small"
                      src={location}
                      alt="email icon"
                    />
                    <p className="folder__small-text folder__small-text--bold">
                      julia.bbchv@gmail.com
                    </p>
                  </a>
                </div>
                <div className="folder__projects ">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/juliababicheva/
                    "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="folder__project-icon folder__project-icon--small"
                        src={linkedinLogo}
                        alt="LinkedIn Logo"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/juliabbchv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="folder__project-icon folder__project-icon--small"
                        src={githubLogo}
                        alt="GitHub Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
