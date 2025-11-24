import HeroHeader from "@/components/HeroHeader";
import Franchises from "@/components/Franchises";
import RichTextRenderer from "@/components/RichTextRenderer";

const ContactUs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Curriculum",
      },
      {
        type: "p",
        text: `RILLS offers a rich and stimulating curriculum. It includes a foreign language (all children learn Spoken English from Reception onwards), national language, art, design and basic sciences. Core subjects like Maths and English give your children the excellent literacy and numeracy skills they need, whatever path they choose in life. Urdu language curriculum helps to compose proud Pakistanis, whereas, Islamic Studies curriculum covers nitty-gritty of Islam.`,
      },
      {
        type: "p",
        text: `Science curriculum introduces the excitement of scientific investigation while our lively Social Studies curriculum gives the students a deeper understanding of the world in which they live. Every child can shine at RILLS - whether they are wizards at Maths, have an eye for design, or are great in the playground.`,
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"RILLS Contact Info"} description="Contact RILLS" />
      {/* <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div> */}
      <Franchises headcampus />
    </main>
  );
};

export default ContactUs;
