import { getPostBySlug } from "@/components/mdx";
import Container from "@/components/Container";

const getPageContent = async (slug : any) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: { params: any }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }: { params: any }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <Container>
      <div className="container prose prose-headings:text-white prose-p:text-white prose-ul:text-white">{content}</div>
    </Container>
  );
};

export default Page;
