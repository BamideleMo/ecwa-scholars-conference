import { createSignal } from "solid-js";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/images/about-ESC-Inuaguration-ECWA-Headquarters.jpg";

function About() {
  return (
    <>
      <MetaProvider>
        <Title>
          About ECWA Scholars Conference - www.ecwascholarsconference.org
        </Title>
        <Link rel="canonical" href="https://ecwascholarsconference.org/" />
        <Meta
          name="description"
          content="ECWA Scholars Conference is Promoting Unity, Freindship, Collaboration, Equity and Justice amongst ECWA Scholars"
        />
        <Header />
        <div class="w-11/12 mx-auto my-10 md:my-20 text-slate-800">
          <h2 class="text-center md:text-left uppercase text-3xl lg:text-4xl font-semibold">
            About
          </h2>
          <div class="my-4 md:my-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 text-xl">
            <div>
              <img src={introImg} class="w-full rounded-3xl" />
            </div>
            <div class="space-y-8 md:space-y-10">
              <div>
                <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                  Vision
                </h2>
                <p>Bearing Witness to the Truth (John 18:37).</p>
              </div>
              <div>
                <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                  Mission
                </h2>
                <p>
                  Promoting Unity, Friendship, Collaboration, Equity and Justice
                  amongst ECWA Scholars.
                </p>
              </div>
              <div>
                <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                  Motto
                </h2>
                <p>Unity in Truth.</p>
              </div>
            </div>
            <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="space-y-8 md:space-y-10">
                <div>
                  <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                    Patron
                  </h2>
                  <p>
                    ECWA President is automatically the Patron of ECWA Scholars
                    Conference.
                  </p>
                </div>
                <div>
                  <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                    Chairman
                  </h2>
                  <div>
                    <h3 class="font-semibold">Prof. A. M. Ahuwan</h3>
                    <p>Dept. of Industrial Design,</p>
                    <p>ABU Zaria (08026496741)</p>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                    Secretary
                  </h2>
                  <div>
                    <h3 class="font-semibold">Rev. Prof. Sunday B. Agang</h3>
                    <p>ECWA Theological Seminary,</p>
                    <p>Jos (08083592639)</p>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                    PRO
                  </h2>
                  <div>
                    <h3 class="font-semibold">Rev. Dr. Reuben Maiture</h3>
                    <p>CRE, Institute of Education,</p>
                    <p>ABU Zaria (08026625639)</p>
                  </div>
                </div>
              </div>
              <div class="space-y-8 md:space-y-10">
                <div>
                  <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                    Advisers
                  </h2>
                  <div class="space-y-6">
                    <div>
                      <h3 class="font-semibold">Rev. Prof. Musa A.B. Gaiya</h3>
                      <p>Dept. of Religion and Philosophy,</p>
                      <p>University of Jos.</p>
                    </div>
                    <div>
                      <h3 class="font-semibold">Rev. Prof. Yusufu Turaki</h3>
                      <p>ECWA Theological Seminary,</p>
                      <p>Jos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </MetaProvider>
    </>
  );
}

export default About;
