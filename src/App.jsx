import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal } from "solid-js";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Aims from "./components/Aims";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";

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
          <div class="w-11/12 mx-auto">
            <h2 class="text-3xl lg:text-5xl font-semibold uppercase text-center">
              News & Events
            </h2>

            <NewsCard />
          </div>
          <Footer />
        </div>
      </MetaProvider>
    </>
  );
}

export default App;
