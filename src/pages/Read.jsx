import { createSignal, Match, Switch } from "solid-js";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A, useParams, useNavigate } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import flier from "../assets/images/ESC-2024-flier.jpg";
import flierPDF from "../assets/ESC-2024-flier.pdf";
import audio from "../assets/ECWA-Scholars-Conference-2024-recap.mp3";

import recapImg1 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-01.jpeg";
import recapImg2 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-02.jpeg";
import recapImg3 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-03.jpeg";
import recapImg4 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-04.jpeg";
import recapImg5 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-05.jpeg";
import recapImg6 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-06.jpeg";
import recapImg7 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-07.jpeg";
import recapImg8 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-08.jpeg";
import recapImg9 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-09.jpeg";
import recapImg10 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-10.jpeg";
import recapImg11 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-11.jpeg";
import recapImg12 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-12.jpeg";
import recapImg13 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-13.jpeg";
import recapImg14 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-14.jpeg";
import recapImg15 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-15.jpeg";
import recapImg16 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-16.jpeg";
import recapImg17 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-17.jpeg";
import recapImg18 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-18.jpeg";
import recapImg19 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-19.jpeg";
import recapImg20 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-20.jpeg";
import recapImg21 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-21.jpeg";
import recapImg22 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-22.jpeg";
import recapImg23 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-23.jpeg";
import recapImg24 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-24.jpeg";
import recapImg25 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-25.jpeg";
import recapImg26 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-26.jpeg";
import recapImg27 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-27.jpeg";
import recapImg28 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-28.jpeg";
import recapImg29 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-29.jpeg";
import recapImg30 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-30.jpeg";
import recapImg31 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-31.jpeg";
import recapImg32 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-32.jpeg";
import recapImg33 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-33.jpeg";
import recapImg34 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-34.jpeg";
import recapImg35 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-35.jpeg";
import recapImg36 from "../assets/images/conference-2024/ECWA-Scholars-Conference-2024-36.jpeg";

function Read() {
  const params = useParams();
  return (
    <>
      <MetaProvider>
        <Title>Read News and publications by ECWA Scholars Conference</Title>
        <Link rel="canonical" href="https://ecwascholarsconference.org/" />
        <Meta
          name="description"
          content="Read News and publications by ECWA Scholars Conference."
        />
        <Header />
        <div class="w-11/12 mx-auto my-10 md:my-20 text-slate-800">
          <h2 class="text-center md:text-left uppercase text-3xl md:text-4xl font-semibold">
            <Switch>
              <Match
                when={
                  params.slug ===
                  "ECWA-Scholars-Summit-Conference-2024-View-download-flier-for-details"
                }
              >
                ECWA Scholars Summit/Conference 2024: View & download flier for
                details
              </Match>
              <Match
                when={
                  params.slug ===
                  "recap-and-pictures-from-ECWA-Scholars-Summit-Conference-2024"
                }
              >
                Radio (News) recap and pictures from ECWA Scholars
                Summit/Conference 2024.
              </Match>
            </Switch>
          </h2>
          <div class="w-full sm:w-1/2 mx-auto">
            <Switch>
              <Match
                when={
                  params.slug ===
                  "ECWA-Scholars-Summit-Conference-2024-View-download-flier-for-details"
                }
              >
                <>
                  <p class="py-10">
                    <a
                      href={flierPDF}
                      target="_blank"
                      class="text-red-600 hover:opacity-60 border-b border-blue-600"
                    >
                      View/Download Flier (PDF)
                    </a>
                  </p>
                  <p>
                    <img src={flier} class="w-full" />
                  </p>
                </>
              </Match>
              <Match
                when={
                  params.slug ===
                  "recap-and-pictures-from-ECWA-Scholars-Summit-Conference-2024"
                }
              >
                <>
                  <div class="space-y-6 my-10">
                    <p class="">
                      News recap of ECWA Scholars Summit Conference 2024 on
                      radio:
                    </p>
                    <p>
                      <audio controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source src={audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </p>
                    <p class="">
                      Pictures from the 2024 ECWA Scholars Summit Conference:
                    </p>
                    <p class="space-y-6">
                      <img src={recapImg1} class="w-full rounded-3xl block" />
                      <img src={recapImg2} class="w-full rounded-3xl block" />
                      <img src={recapImg3} class="w-full rounded-3xl block" />
                      <img src={recapImg4} class="w-full rounded-3xl block" />
                      <img src={recapImg5} class="w-full rounded-3xl block" />
                      <img src={recapImg6} class="w-full rounded-3xl block" />
                      <img src={recapImg7} class="w-full rounded-3xl block" />
                      <img src={recapImg8} class="w-full rounded-3xl block" />
                      <img src={recapImg9} class="w-full rounded-3xl block" />
                      <img src={recapImg11} class="w-full rounded-3xl block" />
                      <img src={recapImg12} class="w-full rounded-3xl block" />
                      <img src={recapImg13} class="w-full rounded-3xl block" />
                      <img src={recapImg14} class="w-full rounded-3xl block" />
                      <img src={recapImg15} class="w-full rounded-3xl block" />
                      <img src={recapImg16} class="w-full rounded-3xl block" />
                      <img src={recapImg17} class="w-full rounded-3xl block" />
                      <img src={recapImg18} class="w-full rounded-3xl block" />
                      <img src={recapImg19} class="w-full rounded-3xl block" />
                      <img src={recapImg20} class="w-full rounded-3xl block" />
                      <img src={recapImg21} class="w-full rounded-3xl block" />
                      <img src={recapImg22} class="w-full rounded-3xl block" />
                      <img src={recapImg23} class="w-full rounded-3xl block" />
                      <img src={recapImg24} class="w-full rounded-3xl block" />
                      <img src={recapImg25} class="w-full rounded-3xl block" />
                      <img src={recapImg26} class="w-full rounded-3xl block" />
                      <img src={recapImg27} class="w-full rounded-3xl block" />
                      <img src={recapImg28} class="w-full rounded-3xl block" />
                      <img src={recapImg29} class="w-full rounded-3xl block" />
                      <img src={recapImg30} class="w-full rounded-3xl block" />
                      <img src={recapImg31} class="w-full rounded-3xl block" />
                      <img src={recapImg32} class="w-full rounded-3xl block" />
                      <img src={recapImg33} class="w-full rounded-3xl block" />
                      <img src={recapImg34} class="w-full rounded-3xl block" />
                      <img src={recapImg35} class="w-full rounded-3xl block" />
                      <img src={recapImg36} class="w-full rounded-3xl block" />
                    </p>
                  </div>
                </>
              </Match>
            </Switch>
          </div>
        </div>
        <Footer />
      </MetaProvider>
    </>
  );
}

export default Read;
