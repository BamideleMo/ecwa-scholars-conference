import { createSignal } from "solid-js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/images/membership-ESC-Inuaguration-ECWA-Headquarters.jpg";

function News() {
  return (
    <>
      <Header />
      <div class="w-11/12 mx-auto my-10 md:my-20 text-slate-800">
        <h2 class="text-center md:text-left uppercase text-3xl md:text-4xl font-semibold">
          News
        </h2>
        <div class="my-4 md:my-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 text-xl">
          <div class="">
            <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
              Coming soon.. .
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
