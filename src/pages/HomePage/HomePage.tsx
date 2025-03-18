import "./HomePage.scss";
import { useState } from "react";
import Icons from "../../components/Icons/Icons.tsx";
import Note from "../../components/Note/Note.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Folder from "../../components/Folder/Folder.tsx";

export default function HomePage() {
  const [selectedApp, setSelectedApp] = useState<string>("");

  const handleOpen = async (iconName: string) => {
    setSelectedApp(iconName);
  };

  const isAppSelected = (iconName: string) => {
    return selectedApp === iconName;
  };

  return (
    <>
      <main className="home-main">
        <div className="home-main__wrapper">
          <Icons handleOpen={(iconName: string) => handleOpen(iconName)} />
          <Note selectedApp={selectedApp} />
          <Folder selectedApp={selectedApp} setSelectedApp={setSelectedApp} />
        </div>
      </main>
      <Footer />
    </>
  );
}
