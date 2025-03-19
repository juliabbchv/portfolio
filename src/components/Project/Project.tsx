import "./Project.scss";
import xBtn from "../../assets/icons/x-btn.svg";
import msLogo from "../../assets/icons/ms-logo.svg";
import bstnLogo from "../../assets/icons/bstn-logo.svg";
import msDemo from "../../assets/images/ms-demo.png";
import msDemo2 from "../../assets/images/ms-demo2.png";
import snaps from "../../assets/icons/snaps.svg";
import gitLogo from "../../assets/icons/github-mark.png";
import snapsDemo from "../../assets/videos/snaps-demo.mp4";
import instockDemo from "../../assets/images/instock-demo.png";
import instockDemo2 from "../../assets/images/instock-demo2.png";
import instockDemo3 from "../../assets/images/instock-demo3.png";
import instockDemo4 from "../../assets/images/instock-demo4.png";
import instockLogo from "../../assets/icons/instock.svg";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface FolderProps {
  selectedProject: string;
  setSelectedApp: (value: string) => void;
  setSelectedProject: (value: string) => void;
}

export default function Project({
  selectedProject,
  setSelectedApp,
  setSelectedProject,
}: FolderProps) {
  if (!selectedProject) return null;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    setSelectedProject("");
  };

  const handleCloseWindow = () => {
    setSelectedApp("");
    setSelectedProject("");
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  return (
    <>
      {selectedProject === "ms-hackathon" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title ">Hackathon</h4>
                  </div>
                  <p className="note__tag ">
                    Key Skills: JavaScript, React, OpenAI API integration,
                    Node.js
                  </p>
                  <p className="note__tag">Role: Back-End Developer</p>
                  <p className="note__tag note__tag--back" onClick={handleBack}>
                    <span className="arrow">←</span> Back
                  </p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  src={xBtn}
                  alt="x button"
                  onClick={handleCloseWindow}
                />
              </div>

              <div className="folder__logos">
                <img
                  className="folder__logo"
                  src={msLogo}
                  alt="Microsoft Logo"
                />
                <span className="x">X</span>
                <img
                  className="folder__logo"
                  src={bstnLogo}
                  alt="BrainStation Logo"
                />
              </div>
              <div className="note__front-bottom folder__bottom ">
                <p className="note__text folder__projects-title folder__overview">
                  Overview:
                </p>
              </div>
              <div className="folder__main-text folder__main-text--project">
                <p className="folder__text">
                  An AI-powered solution designed to help small business owners
                  using Microsoft products explore the benefits of AI while
                  addressing common concerns in a familiar, non-intimidating
                  way, helping those who may not be used to writing prompts to
                  use AI to its full potential.
                </p>
                <div className="carousel">
                  <button onClick={scrollPrev} className="carousel__btn left">
                    ◀
                  </button>
                  <div ref={scrollRef} className="carousel__inner">
                    <img
                      className="folder__demo"
                      src={msDemo}
                      alt="Microsoft Demo"
                    />
                    <img
                      className="folder__demo"
                      src={msDemo2}
                      alt="Microsoft Demo"
                    />
                  </div>
                  <button onClick={scrollNext} className="carousel__btn right">
                    ▶
                  </button>
                </div>
                <div className="folder__github">
                  <img
                    className="github-logo"
                    src={gitLogo}
                    alt="GitHub Logo"
                  />
                  <a href="https://github.com/juliabbchv/transparai-client">
                    <p className="folder__github-text">Client |</p>
                  </a>
                  <a href="https://github.com/juliabbchv/transparai-server">
                    <p className="folder__github-text">Server</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {selectedProject === "snaps" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title ">Photo Sharing App</h4>
                  </div>
                  <p className="note__tag ">
                    Key Skills: JavaScript, React, Node.js, RESTful API
                  </p>
                  <p className="note__tag">Role: Lead Software Engineer</p>
                  <p className="note__tag note__tag--back" onClick={handleBack}>
                    <span className="arrow">←</span> Back
                  </p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  src={xBtn}
                  alt="x button"
                  onClick={handleCloseWindow}
                />
              </div>

              <div className="folder__logos">
                <img
                  className="folder__logo folder__logo--snaps"
                  src={snaps}
                  alt="BrainStation Logo"
                />
              </div>
              <div className="note__front-bottom folder__bottom ">
                <p className="note__text folder__projects-title folder__overview">
                  Overview:
                </p>
              </div>
              <div className="folder__main-text folder__main-text--project">
                <p className="folder__text">
                  Snaps is a full-stack photo-sharing application designed for
                  seamless and interactive user engagement. Built with a dynamic
                  front-end and a robust back-end API, Snaps enables users to
                  effortlessly upload, share, and explore photos in real time.
                  Designed with responsiveness and scalability in mind, the app
                  delivers a smooth and intuitive experience across all devices.
                  Whether capturing moments or connecting with others, Snaps is
                  built to make photo sharing simple, fast, and engaging.
                </p>
                <div className="carousel">
                  <video className="folder__demo" autoPlay loop muted>
                    <source src={snapsDemo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {selectedProject === "instock" && (
        <section className="note folder">
          <div className="note__wrap folder__wrap">
            <div className="note__front folder__wrap">
              <div className="note__front-top folder__top">
                <div className="note__tags folder__tags ">
                  <div className="typewriter folder__typewriter">
                    <h4 className="note__title "> Inventory Management</h4>
                  </div>
                  <p className="note__tag ">
                    Key Skills: JavaScript, React, Node.js, MySQL, Express.js,
                    Knex.js
                  </p>
                  <p className="note__tag">Role: Software Engineer</p>
                  <p className="note__tag note__tag--back" onClick={handleBack}>
                    <span className="arrow">←</span> Back
                  </p>
                </div>
                <img
                  className="note__x note__x--clickable"
                  src={xBtn}
                  alt="x button"
                  onClick={handleCloseWindow}
                />
              </div>

              <div className="folder__logos">
                <img
                  className="folder__logo folder__logo--instock"
                  src={instockLogo}
                  alt="InStock Logo"
                />
              </div>
              <div className="note__front-bottom folder__bottom ">
                <p className="note__text folder__projects-title folder__overview">
                  Overview:
                </p>
              </div>
              <div className="folder__main-text folder__main-text--project">
                <p className="folder__text">
                  InStock is a full-stack inventory management system built with
                  a modern React front-end and a powerful Express back-end,
                  InStock efficiently handles heavy traffic loads while
                  maintaining a seamless user experience. The system is powered
                  by MySQL, allowing for efficient storage and management of
                  inventory data.
                </p>
                <div className="carousel">
                  <button onClick={scrollPrev} className="carousel__btn left">
                    ◀
                  </button>
                  <div ref={scrollRef} className="carousel__inner">
                    <img
                      className="folder__demo"
                      src={instockDemo}
                      alt="InStock Demo"
                    />
                    <img
                      className="folder__demo"
                      src={instockDemo2}
                      alt="InStock Demo"
                    />
                    <img
                      className="folder__demo"
                      src={instockDemo3}
                      alt="InStock Demo"
                    />
                    <img
                      className="folder__demo"
                      src={instockDemo4}
                      alt="InStock Demo"
                    />
                  </div>
                  <button onClick={scrollNext} className="carousel__btn right">
                    ▶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
