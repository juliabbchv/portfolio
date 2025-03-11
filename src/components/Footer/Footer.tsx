import vol from "../../assets/icons/sound.svg";
import "./Footer.scss";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

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
      <div className="footer__wrapper">
        <div className="footer__vol">
          <img className="footer__vol-icon" src={vol} alt="volume icon" />
        </div>
        <div className="footer__time">
          <div>{formatTime(currentDateTime)}</div>
          <div>{formatDate(currentDateTime)}</div>
        </div>
      </div>
    </footer>
  );
}
