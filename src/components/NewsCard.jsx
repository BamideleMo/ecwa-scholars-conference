import { createSignal } from "solid-js";
import flier from "../assets/images/ESC-2024-flier.jpg";
import recap2024 from "../assets/images/esc-2024-recap.jpeg";
import flierPDF from "../assets/ESC-2024-flier.pdf";
import { A } from "@solidjs/router";

function NewsCard() {
  return (
    <>
      <div class=" mx-auto mb-20 text-lg md:text-xl">
        <div class="">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 py-6 drop-shadow-lg">
            <A
              href="/read/recap-and-pictures-from-ECWA-Scholars-Summit-Conference-2024"
              class="block border border-gray-200 p-4 rounded-3xl hover:bg-blue-50"
            >
              <div class="bg-gray-100 rounded-lg h-[200px] overflow-hidden">
                <img src={recap2024} class="w-full" />
              </div>
              <div class="font-normal text-xl sm:text-2xl mt-6 text-gray-700">
                Radio (News) recap and pictures from ECWA Scholars
                Summit/Conference 2024.
              </div>
            </A>
            <A
              href="/read/ECWA-Scholars-Summit-Conference-2024-View-download-flier-for-details"
              class="block border border-gray-200 p-4 rounded-3xl hover:bg-blue-50"
            >
              <div class="bg-gray-100 rounded-lg h-[200px] overflow-hidden">
                <img src={flier} class="w-full" />
              </div>
              <div class="font-normal text-xl sm:text-2xl mt-6 text-gray-700">
                ECWA Scholars Summit/Conference 2024: View & download flier for
                details.
              </div>
            </A>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
