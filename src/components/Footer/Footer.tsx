import vol from "../../assets/icons/sound.svg";
import "./Footer.scss";
import { useState, useEffect } from "react";
import musicIcon from "../../assets/icons/music.svg";
import noteIcon from "../../assets/icons/note.svg";
import searchIcon from "../../assets/icons/search.svg";

export default function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
  const [selectedApp, setSelectedApp] = useState<string | null>("noteApp");

  const handleAppSelect = (appId: string) => {
    setSelectedApp(appId);
  };

  const isAppSelected = (appId: string) => {
    return selectedApp === appId;
  };

  const getAppClasses = (appId: string) => {
    return `footer__app ${isAppSelected(appId) ? `footer__app--selected` : ``}`;
  };

  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div>
        <p className="footer__text--desktop">
          &copy;2025 Julia Babicheva. All rights reserved.
        </p>
      </div>
      <div className="footer__apps">
        <div className="footer__search">
          <div className="footer__search-wrapper">
            <img
              className="footer__search-icon"
              src={searchIcon}
              alt="search icon"
            />
          </div>
        </div>
        <div
          className={getAppClasses("musicApp")}
          onClick={() => handleAppSelect("musicApp")}
        >
          <img src={musicIcon} alt="music icon" />
        </div>
        <div
          className={getAppClasses("noteApp")}
          onClick={() => handleAppSelect("noteApp")}
        >
          <img src={noteIcon} alt="note icon" />
        </div>
      </div>
      <div className="footer__wrapper">
        <div className="footer__vol">
          <img className="footer__vol-icon" src={vol} alt="volume icon" />
          <p className="footer__text">
            &copy;2025 Julia Babicheva. <br /> All rights reserved.
          </p>
        </div>
        <div className="footer__time">
          <div>{formatTime(currentDateTime)}</div>
          <div>{formatDate(currentDateTime)}</div>
        </div>
      </div>
    </footer>
  );
}
