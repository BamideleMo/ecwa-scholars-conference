import { A } from "@solidjs/router";
import logo from "./ecwa-scholars-conference-logo.png";
import heroImg from "./assets/images/ECWA-Scholars-Conference.png";
import { createSignal } from "solid-js";

function Footer() {
  return (
    <>
      <div class="w-11/12 mx-auto my-4 flex justify-between border-t-2 border-cyan-950 py-20 text-lg">
        <ul class="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-12">
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
    </>
  );
}

export default Footer;
