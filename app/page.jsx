import Image from "next/image";
import { Raleway, EB_Garamond } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const eb_garamond = EB_Garamond({ subsets: ["latin"] });
import image1 from "../public/images/image1.png";
import image2 from "../public/images/image2.avif";
import image3 from "../public/images/image3.png";

export default function Home() {
  return (
    <main>
      <nav className="bg-darksilver-800">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <div className="flex space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-linecap="square"
              stroke-linejoin="miter"
              className="w-10 stroke-alabaster-200 fill-alabaster-300"
            >
              <path d="M6 7L18 7M6 12L18 12M6 17L18 17" />
            </svg>
            <a href="/" className="flex items-center">
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-alabaster-200">
                HSSC:{" "}
                <span className="italic text-darksilver-200">Ameliorate</span>
              </span>
            </a>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 text-xl font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-alabaster-300">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 hover:text-darksilver-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-darksilver-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 hover:text-darksilver-400"
                >
                  Clubs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded bg-tan-500 text-blackolive-600"
                >
                  Submissions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-32 mt-8 space-y-10">
        <div className={eb_garamond.className}>
          <ul className="flex flex-wrap border-b text-darksilver-400 border-darksilver-400 w-fit">
            <li>
              <a
                href="#"
                className="inline-block p-3 font-bold border-b-4 border-transparent active text-tan-600"
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-blackolive-500 text-blackolive-500"
              >
                Ameliorate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-transparent"
              >
                Rebirth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-transparent"
              >
                Paradigm
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-transparent"
              >
                Miscllaneous
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-7 gap-x-12 text-blackolive-700">
          <div className="flex flex-col col-span-2 space-y-16">
            <div className="space-y-6">
              <Image src={image1}></Image>
              <div className="py-4 font-bold border-y-2 border-blackolive-400">
                <h2 className="text-2xl font-black hover:underline">
                  <span className="text-base3 text-tan-600">Geography | </span>
                  The Resilience of Buildings
                </h2>
              </div>
            <div className="space-y-2">
              <p className={eb_garamond.className}>
                When tectonic plates move, it's hard to withstand change.
                Mountain ranges are born, the earth shakes, and robust concrete
                buildings crumble. But despite the volatile ground they stand
                on, some buildings seem to remain unscathed, untouchable by
                seismic activity.
              </p>
              <p className="space-x-2"><span className="italic font-bold text-darksilver-500">Amy Xu</span> <span className="mt-2 text-darksilver-500">September 29th, 2023</span></p>
            </div>
            </div>
            <div className="space-y-6 text-dark">
              <h2 className="py-4 text-2xl font-black border-y-2 border-blackolive-400 hover:underline">
                Recent News
              </h2>
              <p className={eb_garamond.className}>
                The most powerful T10 typhoon has hit Hong Kong since 2018 -
                Typhoon Saola. On the 1st of September, fierce winds of over 220
                km/h were expected. All schools, stores and companies were
                closed for the day as everyone stayed home, listening to the
                howls of the wind hit their windows. 24 hours after the
                incident, over 1,500 fallen trees, 21 cases of flooding, 2
                landslides and masses of broken scaffolding were reported.
              </p>
            </div>
          </div>
          <div className="flex flex-col col-span-3 space-y-16">
            <div className="space-y-6">
              <Image src={image2}></Image>
              <h2 className="py-4 text-4xl font-black border-y-2 border-blackolive-400 hover:underline">
                The Impact of Covid 19 On Exams
              </h2>
              <p className={eb_garamond.className}>
                With the outbreak of Covid-19 in 2020, and students being unable
                to attend in person school, many schools proposed the concept of
                online learning. Nevertheless, there were many downsides to this
                as many students and teachers struggled with internet problems
                on both sides, causing it to have been more difficult for
                teachers to teach, and for students to have been taught.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="py-4 text-4xl font-black border-y-2 border-blackolive-400 hover:underline">
                The Real Reason Why STEM Subjects Are Better Than Humanities
              </h2>
              <p className={eb_garamond.className}>
                With the outbreak of Covid-19 in 2020, and students being unable
                to attend in person school, many schools proposed the concept of
                online learning. Nevertheless, there were many downsides to this
                as many students and teachers struggled with internet problems
                on both sides, causing it to have been more difficult for
                teachers to teach, and for students to have been taught.
              </p>
            </div>
          </div>
          <div className="flex flex-col col-span-2 space-y-16">
            <div className="space-y-6">
              <h2 className="py-4 text-2xl font-black border-y-2 border-blackolive-400 hover:underline">
                Rebirth of the HSSC
              </h2>
              <p className={eb_garamond.className}>
                In a society where STEM disciplines are embraced with open arms,
                the humanities are disregarded as 'useless'. With the demand for
                STEM employment rapidly increasing, students may feel compelled
                to pursue STEM fields, especially in the dawn of globalisation
                and digitalisation.
              </p>
            </div>
            <div className="space-y-6 text-dark">
              <Image src={image3}></Image>
              <h2 className="py-4 text-2xl font-black border-y-2 border-blackolive-400 hover:underline">
                IGCSE Subject Choices
              </h2>
              <p className={eb_garamond.className}>
                Feeling lost about your GCSE humanities subject choices? Unsure
                of how to study humanities? Worry no more, this article will
                provide you with all the necessary insights and advice. So what
                are the humanities? The name is quite self explanatory, it is
                the study of humans, whether that may be the individual,
                culture, or society. You may be like me, a STEM student who
                absolutely loathed the humanities, but I promise you, the
                humanities are so much more than the perpetual memorising of
                mundane chunks of text for tests, it teaches you how to think,
                how to solve intricate problems, how to reason, and most
                importantly how to navigate through the labyrinth of society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
