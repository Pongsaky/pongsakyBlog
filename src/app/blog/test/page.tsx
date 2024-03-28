import Hello from '@/app/content/hello.mdx'
import Container from '@/components/Container';

const Home = () => {
  return (
    <Container>
      <div className="container py-4">
        <Hello />
      </div>
    </Container>
  );
}

export default Home;