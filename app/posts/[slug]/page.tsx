import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../components/GetPostMetadata";


const getPostContent = (slug) => { 
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => {
    slug: post.slug
  });
};

export default function PostPage(props) { 
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return <div className="flex justify-center my-12">
    <article className="prose text-justify prose-blackolive md:prose-lg lg:prose-xl" >
      <hgroup>
        <h1>{post.data.title}</h1>
        <p className="space-x-2">
          <span className="text-blackolive-700">{post.data.author} /</span>
          <span className="text-blackolive-500">{post.data.date}</span>
        </p>
      </hgroup>
      <Markdown>{post.content}</Markdown>
    </article>
  </div>
}