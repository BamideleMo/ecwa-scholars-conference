import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal } from "solid-js";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Aims from "./components/Aims";
import Footer from "./components/Footer";
import flier from "./assets/images/ESC-2024-flier.jpg";
import flierPDF from "./assets/ESC-2024-flier.pdf";

function App() {
  const [showMenu, setShowMenu] = createSignal(false);
  return (
    <>
      <MetaProvider>
        <Title>ECWA Scholars Conference - www.ecwascholarsconference.org</Title>
        <Link rel="canonical" href="https://ecwascholarsconference.org/" />
        <Meta
          name="description"
          content="Welcome to ECWA Scholars Conference website."
        />
        <div class="">
          <Header />
          <HeroSection />
          <Aims />
          <div class="w-11/12 md:w-6/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-1 gap-10 text-lg md:text-xl text-center">
            <div class="text-3xl lg:text-5xl font-semibold uppercase">
              ECWA Scholars Summit/Conference 2024
            </div>
            <div class="w-10/12 md:w-80 mx-auto space-y-4">
              <div>
                <a
                  href={flierPDF}
                  target="_blank"
                  class="text-red-600 hover:opacity-60 border-b border-blue-600"
                >
                  View/Download Flier (PDF)
                </a>
              </div>
              <img src={flier} class="w-full" />
            </div>
          </div>
          <Footer />
        </div>
      </MetaProvider>
    </>
  );
}

export default App;
