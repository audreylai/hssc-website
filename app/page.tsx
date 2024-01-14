import { EB_Garamond } from "next/font/google";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

import getPostMetadata from "./components/GetPostMetadata";
import PostPreview from "./components/PostPreview";


export default function Home() {
  const postsMetadata = getPostMetadata();
  const postPreviews = postsMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}></PostPreview>
  ));
  return (
    <main>
      <div className="mx-32 my-8 space-y-10">
        <div className={eb_garamond.className}>
          <ul className="flex flex-wrap border-b text-darksilver-400 border-darksilver-400 w-fit">
            <li>
              <a
                href="#"
                className="inline-block p-3 font-bold border-b-4 text-tan-600 border-blackolive-500"
              >
                Ameliorate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-transparent border-blackolive-500" // text-blackolive-500
              >
                Rebirth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-transparent border-blackolive-500"
              >
                Paradigm
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block p-3 border-b-4 border-transparent border-blackolive-500"
              >
                Miscllaneous
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-7 gap-x-12 text-blackolive-700 ">
          <div className="flex flex-col col-span-2 space-y-16">
            {postPreviews.slice(0,2)}
          </div>

          <div className="flex flex-col col-span-3 space-y-16">
            {postPreviews.slice(2,3)}
          </div>
          <div className="flex flex-col col-span-2 space-y-16">
            {postPreviews.slice(3,4)}
          </div>
        </div>
      </div>
    </main>
  );
}
