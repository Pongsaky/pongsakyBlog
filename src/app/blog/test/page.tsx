import Hello from '@/app/content/hello.mdx'
import Container from '@/app/utils/container';

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