import { A } from "@solidjs/router";
import logo from "./ecwa-scholars-conference-logo.png";
import heroImg from "./assets/images/ECWA-Scholars-Conference.png";
import { createSignal } from "solid-js";

function App() {
  const [showMenu, setShowMenu] = createSignal(false);
  return (
    <>
      <Show when={showMenu()}>
        <div class="z-50 flex fixed top-0 bottom-0 left-0 right-0 bg-slate-950 bg-opacity-90 h-screen w-screen">
          <div class="grow">&nbsp;</div>
          <div class="w-80 bg-white px-10">
            <h2 class="border-b border-cyan-950 py-10 flex justify-between">
              <span>&nbsp;</span>
              <svg
                onClick={() => {
                  setShowMenu(!showMenu());
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 cursor-pointer hover:opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </h2>
            <div class="my-6">
              <ul class="space-y-8 text-xl">
                <li>
                  <A href="/" class="hover:text-red-600">
                    About
                  </A>
                </li>
                <li>
                  <A href="/" class="hover:text-red-600">
                    Contact
                  </A>
                </li>
                <li>
                  <A href="/" class="hover:text-red-600">
                    News
                  </A>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Show>
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
              onClick={() => {
                setShowMenu(!showMenu());
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16 hover:opacity-60 cursor-pointer"
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
            <div class="pt-12">
              <A
                href="#"
                class="bg-cyan-800 hover:opacity-60 p-4 rounded-3xl text-xl text-white"
              >
                Learn more about us
              </A>
            </div>
          </div>
          <div class="w-2/3 pl-20">
            <img src={heroImg} class="w-full" />
          </div>
        </div>
        <div class="w-11/12 mx-auto my-40 bg-cyan-50 border-cyan-100 border text-slate-800 rounded-3xl py-10 px-4">
          <div class="grid grid-cols-4 gap-8 text-lg drop-shadow-lg">
            <div class="text-5xl font-semibold uppercase">Our Aims</div>
            <div>
              <span class="block text-4xl text-blue-950 font-semibold">1.</span>
              To create a conducive atmosphere for scholars in various
              disciplines to interact.
            </div>
            <div>
              <span class="block text-4xl text-blue-950 font-semibold">2.</span>
              To collaborate and partner with ECWA leaders as a resource
              facilitator.
            </div>
            <div>
              <span class="block text-4xl text-blue-950 font-semibold">3.</span>
              To assist ECWA live up to its goals and objectives.
            </div>
            <div>&nbsp;</div>
            <div class="col-span-2">
              <span class="block text-4xl text-blue-950 font-semibold">4.</span>
              To build up the moral, spiritual, social and academic standards of
              members of ESC for the promotion of peace, unity and commitment to
              humanity.
            </div>
            <div>
              <span class="block text-4xl text-blue-950 font-semibold">5.</span>
              To network with one another on matters that will promote ECWA.
            </div>
            <div>&nbsp;</div>
            <div>
              <span class="block text-4xl text-blue-950 font-semibold">6.</span>
              To discuss and proffer solutions to some of the challenges facing
              ECWA and its global impact.
            </div>
            <div>
              <span class="block text-4xl text-blue-950 font-semibold">7.</span>
              To support and encourage the professional interest and growth of
              ESC members.
            </div>
          </div>
        </div>
        <div class="w-11/12 mx-auto my-4 flex justify-between border-t-2 border-cyan-950 py-20 text-lg">
          <ul class="flex space-x-12">
            <li>
              <A href="/" class="hover:text-red-600">
                About
              </A>
            </li>
            <li>
              <A href="/" class="hover:text-red-600">
                Contact
              </A>
            </li>
            <li>
              <A href="/" class="hover:text-red-600">
                News
              </A>
            </li>
            <li>
              <A href="/" class="hover:text-red-600">
                Membership
              </A>
            </li>
          </ul>
          <div class="text-gray-400">&copy; 2024. All rights reserved.</div>
        </div>
      </div>
    </>
  );
}

export default App;
