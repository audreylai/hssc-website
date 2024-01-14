import { PostMetadata } from "./PostMetadata";
import matter from "gray-matter";
import fs from "fs";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const postsMetadata = markdownPosts.map((markdownPost) => {
    const fileContents = fs.readFileSync(`posts/${markdownPost}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: markdownPost.replace(".md", ""),
      subject: matterResult.data.subject,
      image: matterResult.data.image,
    };
  });
  return postsMetadata;
};

export default getPostMetadata;