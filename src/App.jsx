import { A } from "@solidjs/router";
// import logo from "./logo.svg";
import logo from "./ecwa-scholars-conference-logo.png";
import heroImg from "./assets/images/ECWA-Scholars-Conference.png";

function App() {
  return (
    <div class="">
      <div class="w-11/12 mx-auto my-4 drop-shadow-lg shadow-md border p-4 rounded-2xl flex justify-between">
        <div>
          <A href="/">
            <img src={logo} class="w-32" />
          </A>
        </div>
        <div class="flex uppercase text-base space-x-8 mt-3">
          <div class="pt-5">
            <A
              href="/"
              class="bg-red-800 hover:bg-cyan-800 p-3 text-white rounded-xl"
            >
              Membership
            </A>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div class="w-11/12 mx-auto my-0 flex justify-between">
        <div class="w-1/2 pt-20">
          <h1 class="uppercase text-8xl font-semibold text2">
            ECWA Scholars Conference
          </h1>
          <h2 class="text1 text-2xl font-semibold">
            Promoting Unity, Freindship, Collaboration, Equity and Justice
            amongst ECWA Scholars
          </h2>
          <div class="pt-8">
            <A href="#" class="bg-cyan-600 hover:opacity-60 p-4 rounded-3xl text-xl text-white">Learn more about us</A>
          </div>
        </div>
        <div class="w-2/3 pl-20">
          <img src={heroImg} class="w-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
