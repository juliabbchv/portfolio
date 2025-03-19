import "./HomePage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../components/Icons/Icons.tsx";
import Note from "../../components/Note/Note.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Folder from "../../components/Folder/Folder.tsx";
import Project from "../../components/Project/Project.tsx";

export default function HomePage() {
  const [selectedApp, setSelectedApp] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<string>("");
  const navigate = useNavigate();

  const handleOpen = async (iconName: string) => {
    setSelectedApp(iconName);
    if (iconName === "webDev") {
      navigate("/web-dev");
    }
    if (iconName === "socialMedia") {
      navigate("/social-media");
    }
    if (iconName === "contactMe") {
      navigate("/contact-me");
    }
  };

  return (
    <>
      <main className="home-main">
        <div className="home-main__wrapper">
          <Icons handleOpen={(iconName: string) => handleOpen(iconName)} />
          <Note selectedApp={selectedApp} />
          <Folder
            selectedApp={selectedApp}
            selectedProject={selectedProject}
            setSelectedApp={setSelectedApp}
            setSelectedProject={setSelectedProject}
          />
          <Project selectedProject={selectedProject} />
        </div>
      </main>
      <Footer />
    </>
  );
}
