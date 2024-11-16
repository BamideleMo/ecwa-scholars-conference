import { A } from "@solidjs/router";
import logo from "./ecwa-scholars-conference-logo.png";
import heroImg from "./assets/images/ECWA-Scholars-Conference.png";
import { createSignal } from "solid-js";

function Aims() {
  return (
    <>
      <div class="w-11/12 mx-auto my-40 bg-cyan-50 border-cyan-100 border text-slate-800 rounded-3xl py-10 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8 text-lg drop-shadow-lg">
          <div class="text-4xl md:text-5xl font-semibold uppercase">Our Aims</div>
          <div>
            <span class="block text-4xl text-blue-950 font-semibold">1.</span>
            To create a conducive atmosphere for scholars in various disciplines
            to interact.
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
          <div class="hidden lg:block">&nbsp;</div>
          <div class="lg:col-span-2">
            <span class="block text-4xl text-blue-950 font-semibold">4.</span>
            To build up the moral, spiritual, social and academic standards of
            members of ESC for the promotion of peace, unity and commitment to
            humanity.
          </div>
          <div>
            <span class="block text-4xl text-blue-950 font-semibold">5.</span>
            To network with one another on matters that will promote ECWA.
          </div>
          <div class="hidden lg:block">&nbsp;</div>
          <div>
            <span class="block text-4xl text-blue-950 font-semibold">6.</span>
            To discuss and proffer solutions to some of the challenges facing
            ECWA and its global impact.
          </div>
          <div>
            <span class="block text-4xl text-blue-950 font-semibold">7.</span>
            To support and encourage the professional interest and growth of ESC
            members.
          </div>
        </div>
      </div>
    </>
  );
}

export default Aims;
