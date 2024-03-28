import Showcase from "@/components/Showcase";

export default function MyProject() {

    const title = "การรู้จำอารมณ์เสียงพูดด้วย ThaiserDataset";
    const preContent =
        "THAISER-DATASET ประกอบไปด้วยเสียงพูดภาษาไทยที่สื่ออารมณ์ทั้งหมด 5 อารมณ์ ได้แก่ โกรธ เศร้า สุข หงุดหงิด ปกติ โดยนักแสดง 200 คน (ชาย 87 และหญิง 113) จำนวน 41 ชม. 36 นาที (27,854 ประโยค) พัฒนาโดยสถาบันวิจัย";

    return (
        <>
            <h1 className="text-3xl font-medium">My Project</h1>
            <div className="flex flex-col gap-3">
                <Showcase title={"ThaiSER"} preContent={""} author="Pongsaky" publishDate="2020-07-01" />
                <Showcase title={"CarbonCredit Marketplcace"} preContent={""} author="Pongsaky" publishDate="2020-07-01" />
                <Showcase title={"Trip Recommendation"} preContent={""} author="Pongsaky" publishDate="2020-07-01" />
                <Showcase title={""} preContent={""} author="Pongsaky" publishDate="2020-07-01" />
            </div>
        </>
    )
}