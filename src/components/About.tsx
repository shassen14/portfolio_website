import PageDetailsFile from "@p/configs/page_details.json";

const About = () => {
  const paragraphs: string[] = PageDetailsFile.about;

  return (
    <section id="about" className="flex flex-col gap-3 lg:px-3 mb-16 lg:mb-36">
      <div className="lg:hidden font-bold text-base uppercase text-foreground">
        About
      </div>
      <div className="flex flex-col gap-5 text-base text-muted-foreground">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
