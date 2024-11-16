import { A } from "@solidjs/router";
import heroImg from "./assets/images/ECWA-Scholars-Conference.png";
import { createSignal } from "solid-js";

function HeroSection() {
    
  return (
    <>
      <div class="w-11/12 mx-auto my-0 flex flex-col md:flex-row justify-between">
        <div class="md:w-1/2 pt-6 md:pt-20">
          <h1 class="uppercase text-4xl md:text-5xl xl:text-8xl font-semibold text2">
            ECWA Scholars Conference
          </h1>
          <h2 class="mt-6 text1 text-2xl font-semibold">
            Promoting Unity, Freindship, Collaboration, Equity and Justice
            amongst ECWA Scholars
          </h2>
          <div class="pt-12">
            <A
              href="#"
              class="bg-cyan-800 hover:opacity-60 p-4 rounded-3xl text-lg md:text-xl text-white"
            >
              Learn more about us
            </A>
          </div>
        </div>
        <div class="mt-12 md:w-2/3 md:pl-20">
          <img src={heroImg} class="w-full" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
