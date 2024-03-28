import Link from "next/link";
import { getAllPostsMeta } from "@/components/mdx";
import Container from "@/components/Container";
import Showcase from "@/components/Showcase";

const Page = async () => {
  const posts = await getAllPostsMeta();
  // console.log(posts);
  return (
    <Container>
        <h1 className="text-3xl font-bold">All Posts</h1>
        {/* My blog case */}
        <div>
          {posts?.map((post: any) => (
            <Link
              href={`blog/${post.slug}`}
              key={post.title}
              className="p-8 rounded-md shadow-md"
            >
              <Showcase title={post.title} author={post.author} publishDate={post.publishDate} preContent={post.preContent}/>
            </Link>
          ))}
        </div>
    </Container>
  );
};

export default Page;
