import { createSignal } from "solid-js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/images/membership-ESC-Inuaguration-ECWA-Headquarters.jpg";
import NewsCard from "../components/NewsCard";

function News() {
  return (
    <>
      <Header />
      <div class="w-11/12 mx-auto my-10 md:my-20 text-slate-800">
        <h2 class="text-center md:text-left uppercase text-3xl md:text-4xl font-semibold">
          News & Events
        </h2>
        <div class="">
          <NewsCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
