import Image from "next/image";
import Container from "../../components/Container";

export default function PDF() {
    return (
        <Container>
            <Image src={"/myResume.jpg"} alt={""} width={600} height={500}/>
        </Container>
    )
}