import { createSignal } from "solid-js";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/images/membership-ESC-Inuaguration-ECWA-Headquarters.jpg";

function Membership() {
  return (
    <>
    <MetaProvider>
      <Title>ECWA Scholars Conference Membership</Title>
      <Link rel="canonical" href="https://ecwascholarsconference.org/" />
      <Meta
        name="description"
        content="Membership of ECWA Scholars Conference."
      />
      <Header />
      <div class="w-11/12 mx-auto my-10 md:my-20 text-slate-800">
        <h2 class="text-center md:text-left uppercase text-3xl md:text-4xl font-semibold">
          Membership
        </h2>
        <div class="my-4 md:my-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 text-xl">
          <div>
            <img src={introImg} class="w-full rounded-3xl" />
          </div>
          <div class="space-y-8 md:space-y-10">
            <div>Membership of ESC shall be opened to:</div>
            <div class="list-decimal my-4 grid grid-cols-1 md:grid-cols-1 gap-10">
              <div>
                <span class="font-bold text-2xl lg:text-3xl block">A.</span>
                Full membership shall be opened to all ECWA members in the
                academia and theological institutions worldwide.
              </div>
              <div>
                <span class="font-bold text-2xl lg:text-3xl block">B.</span>
                Affiliate membership shall be opened to interested scholars who
                are in solidarity with ECWA traditions and practices.
              </div>
              <div>
                <span class="font-bold text-2xl lg:text-3xl block">C.</span>
                Membership shall be open to members who are not serving in any
                institutions, but are involved in learning and scholarship.
              </div>
              <div>
                <span class="font-bold text-2xl lg:text-3xl block">D.</span>
                Honourary membership shall be opened to all former and serving
                ECWA Executive (EE).
              </div>
              <div>
                <span class="font-bold text-2xl lg:text-3xl block">E.</span>
                To be a full fledge member, a scholar is expected to register
                formally.
              </div>
              <div>
                <span class="font-bold text-2xl lg:text-3xl block">F.</span>
                ESC branches shall be formed in theological colleges/seminaries
                and institutions of higher learning wherever applicable.
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

export default Membership;
