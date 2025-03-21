import { createSignal } from "solid-js";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/images/membership-ESC-Inuaguration-ECWA-Headquarters.jpg";
import NewsCard from "../components/NewsCard";

function News() {
  return (
    <>

          <MetaProvider>
            <Title>News & Events - ECWA Scholars Conference</Title>
            <Link rel="canonical" href="https://ecwascholarsconference.org/" />
            <Meta
              name="description"
              content="News and Events from ECWA Scholars Conference website."
            />
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
      </MetaProvider>
    </>
  );
}

export default News;
