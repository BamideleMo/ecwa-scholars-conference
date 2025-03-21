import { A } from "@solidjs/router";
import logo from "../ecwa-scholars-conference-logo.png";
import heroImg from "../assets/images/ECWA-Scholars-Conference.png";
import { createSignal } from "solid-js";

function Header() {
  const [showMenu, setShowMenu] = createSignal(false);
  return (
    <>
      <Show when={showMenu()}>
        <div class="z-50 flex fixed top-0 bottom-0 left-0 right-0 bg-slate-950 bg-opacity-90 h-screen w-screen">
          <div class="grow">&nbsp;</div>
          <div class="w-80 bg-white px-4 md:px-10">
            <h2 class="border-b border-cyan-950 py-4 md:py-10 flex justify-between">
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
                className="size-12 md:size-16 cursor-pointer hover:opacity-60"
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
                <li class="md:hidden pt-4">
                  <A
                    href="/membership"
                    class="bg-red-800 hover:bg-cyan-800 p-3 text-white rounded-xl"
                  >
                    Membership
                  </A>
                </li>
                <li class="pt-4">
                  <A href="/about" class="hover:text-red-600">
                    About
                  </A>
                </li>
                <li>
                  <A href="/contact" class="hover:text-red-600">
                    Contact
                  </A>
                </li>
                <li>
                  <A href="/news" class="hover:text-red-600">
                    News & Events
                  </A>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-11/12 mx-auto my-4 drop-shadow-lg shadow-md border p-2 md:p-4 rounded-2xl flex justify-between">
        <div>
          <A href="/">
            <img src={logo} class="w-20 md:w-32" />
          </A>
        </div>
        <div class="flex uppercase text-base space-x-8 md:mt-3">
          <div class="hidden md:block md:pt-5">
            <A
              href="/membership"
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
            className="size-12 md:size-16 hover:opacity-60 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
