import { A } from "@solidjs/router";

function Footer() {
  return (
    <>
      <div class="w-11/12 mx-auto my-4 flex justify-between border-t-2 border-cyan-950 py-20 text-lg">
        <ul class="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-12">
          <li>
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
              News
            </A>
          </li>
          <li>
            <A href="/membership" class="hover:text-red-600">
              Membership
            </A>
          </li>
        </ul>
        <div class="text-gray-400">
          &copy; 2024. <span class="block h-0 md:hidden">&nbsp;</span>
          All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
