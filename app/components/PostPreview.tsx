import { PostMetadata } from "./PostMetadata";

import { EB_Garamond } from "next/font/google";
const eb_garamond = EB_Garamond({ subsets: ["latin"] });

import Image from "next/image";
import Link from "next/link";


export default function PropsPreview(props: PostMetadata) { 
  return (
    <div className="space-y-4" key={props.slug}>
      <div className="space-y-6">
        {props.image != "" && (
          <Image
            src={`/images/${props.image}`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt=""
          ></Image>
        )}
        <div className="py-4 font-bold border-y-2 border-blackolive-400">
          <Link href={`/posts/${props.slug}`}>
            <h2 className="text-2xl font-black hover:text-blackolive-400">
              {props.subject != ""  && (<span className="text-base3 text-tan-600">{props.subject} | </span>)}
              {props.title}
            </h2>
          </Link>
        </div>
      </div>
      <div>
        <p className={eb_garamond.className}>
          {props.description}
        </p>
      </div>
    </div>
  )
}