import computer from "../../assets/icons/computer.svg";
import folder from "../../assets/icons/folder.svg";
import phone from "../../assets/icons/phone.svg";

export default function Icons() {
  return (
    <section className="icons">
      <div className="icon">
        <img src={computer} alt="computer icon" />
      </div>
      <div className="icon">
        <img src={folder} alt="folder icon" />
      </div>
      <div className="icon">
        <img src={phone} alt="phone icon" />
      </div>
    </section>
  );
}
