import "./globals.css";
import Link from "next/link";

import { Playfair } from "next/font/google";
const playfair = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "HSSC",
  description: "The HSSC Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <nav className="bg-darksilver-800">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <div className="flex ml-20 space-x-6">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-linecap="square"
              stroke-linejoin="miter"
              className="w-10 stroke-alabaster-200 fill-alabaster-300"
            >
              <path d="M6 7L18 7M6 12L18 12M6 17L18 17" />
            </svg> */}
              <Link href="/" className="flex items-center">
                <span className="self-center text-4xl font-semibold whitespace-nowrap text-alabaster-200">
                  HSSC:{" "}
                  <span className="italic text-darksilver-200">Ameliorate</span>
                </span>
              </Link>
            </div>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 text-xl font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-alabaster-300">
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pl-3 pr-4 hover:text-darksilver-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clubs"
                    className="block py-2 pl-3 pr-4 hover:text-darksilver-400"
                  >
                    Clubs
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://forms.gle/5BrMajaCVKiH9VUe8"
                    className="block px-4 py-2 rounded bg-tan-500 text-blackolive-600"
                  >
                    Submissions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
