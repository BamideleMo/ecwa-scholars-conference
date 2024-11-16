import { A } from "@solidjs/router";
import logo from "./ecwa-scholars-conference-logo.png";
import heroImg from "./assets/images/ECWA-Scholars-Conference.png";
import { createSignal } from "solid-js";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Aims from "./Aims";
import Footer from "./Footer";

function App() {
  const [showMenu, setShowMenu] = createSignal(false);
  return (
    <>
      <div class="">
        <Header />
        <HeroSection/>
        <Aims/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
