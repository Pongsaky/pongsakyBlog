import Container from "@/components/Container";
import Introduction from "@/components/Home/Introduction";
import Header from "@/components/Home/Header";
import MyProject from "@/components/Home/MyProject";

export default function Home() {
  

  return (
    <>
      <Container>
        
        <Header/>
        <Introduction/>
        <MyProject/>

      </Container>
    </>
  );
}
