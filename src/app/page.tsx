import Image from "next/image";
import Nav from "@/app/components/nav";
import Showcase from "@/app/components/showcase";
import Container from "./utils/container";

export default function Home() {
  const title = "การรู้จำอารมณ์เสียงพูดด้วย ThaiserDataset";
  const preContent =
    "THAISER-DATASET ประกอบไปด้วยเสียงพูดภาษาไทยที่สื่ออารมณ์ทั้งหมด 5 อารมณ์ ได้แก่ โกรธ เศร้า สุข หงุดหงิด ปกติ โดยนักแสดง 200 คน (ชาย 87 และหญิง 113) จำนวน 41 ชม. 36 นาที (27,854 ประโยค) พัฒนาโดยสถาบันวิจัย";

  return (
    <>
      <Container>
        <div className="space-y-3">
          <p className="text-3xl font-bold">
            Welcome to Personal Pongsaky Website👋
          </p>
        </div>
        <div className="space-y-1 text-base text-gray-300">
          <p>
            Hello, My name is Oak. I&apos;m computer engineering at
            Chulalongkorn University
          </p>
          <p>
            I&apos;m interested in AI, Machine learning and Developer. This
            Website are show my project and post for education
          </p>
        </div>
        <Showcase title={title} preContent={preContent} author="Pongsaky" publishDate="2020-07-01"/>
      </Container>
    </>
  );
}
