import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import preContentSelect from "./preContentSelect";

const rootDirectory = path.join(process.cwd(), "src", "app", "content");

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  // Remove the Markdown content from the preContent
  const preContent = preContentSelect(fileContents.split("---")[2]);

  return {
    meta: {
      title: frontmatter.title,
      publishDate: frontmatter.publishDate,
      author: frontmatter.author,
      slug: realSlug,
      preContent: preContent.substring(0, 200),
    },
    content
  };
};

export const getAllPostsMeta = async () => {
  const fileNames = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const fileName of fileNames) {
    const { meta, content } = await getPostBySlug(fileName);
    posts.push({...meta});
  }
  return posts;
};
