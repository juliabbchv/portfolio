import "./HomePage.scss";
import Icons from "../../components/Icons/Icons.tsx";
import Note from "../../components/Note/Note.tsx";
import Footer from "../../components/Footer/Footer.tsx";

export default function HomePage() {
  return (
    <>
      <main className="home-main">
        <div className="home-main__wrapper">
          <Icons />
          <Note />
        </div>
      </main>
      <Footer />
    </>
  );
}
