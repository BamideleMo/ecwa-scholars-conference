import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { createSignal } from "solid-js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/images/membership-ESC-Inuaguration-ECWA-Headquarters.jpg";

function Contact() {
  return (
    <>
      <MetaProvider>
        <Title>
          Contact ECWA Scholars Conference - www.ecwascholarsconference.org
        </Title>
        <Link rel="canonical" href="https://ecwascholarsconference.org/" />
        <Meta
          name="description"
          content="Contact information for ECWA Scholars Conference."
        />
        <Header />
        <div class="w-11/12 mx-auto my-10 md:my-20 text-slate-800">
          <h2 class="text-center md:text-left uppercase text-3xl md:text-4xl font-semibold">
            Contact
          </h2>
          <div class="my-4 md:my-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 text-xl">
            <div class="">
              <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                Telephone
              </h2>
              <p>
                <a
                  href="tel:+2348169022061"
                  class="text-red-600 hover:opacity-60 border-b border-blue-600"
                >
                  0816 902 2061
                </a>
                ,{" "}
                <a
                  href="tel:+2348026496741"
                  class="text-red-600 hover:opacity-60 border-b border-blue-600"
                >
                  0802 649 6741
                </a>
                ,{" "}
                <a
                  href="tel:+2348083592639"
                  class="text-red-600 hover:opacity-60 border-b border-blue-600"
                >
                  0808 359 2639
                </a>
              </p>
            </div>
            <div>
              <h2 class="text-2xl lg:text-3xl font-semibold text-cyan-800">
                Email
              </h2>
              <p>
                <a
                  href="mailto:esfzaria2015@gmail.com"
                  class="text-red-600 hover:opacity-60 border-b border-blue-600"
                >
                  esfzaria2015@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </MetaProvider>
    </>
  );
}

export default Contact;
