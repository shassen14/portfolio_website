const About = () => {
  return (
    <section id="about" className="flex flex-col gap-3 lg:px-3 mb-16 lg:mb-36">
      <div className="lg:hidden font-bold text-base uppercase text-foreground">
        About
      </div>
      <div className="flex flex-col gap-5 text-base text-muted-foreground">
        <p className="">
          My journey into robotics started with a background in Mechanical Engineering, 
          where I designed and analyzed physical systems. While I loved the hardware, 
          I became fascinated by the software that brings that hardware to life.
        </p>
        <p className="">
          That curiosity led me to specialize in Guidance, Navigation, and Control (GNC), 
          developing software for vehicles across land, air, and sea. I&apos;ve spent the 
          last six years learning how to make robots move reliably in difficult environments. 
          Recently, I&apos;ve been expanding my skillset upstream—building the distributed 
          infrastructure and simulation tools necessary to validate autonomous behaviors 
          before they ever touch the real world.
        </p>
        {/* <p className="">
          I&apos;ve been blessed to work with amazing people who I learned a lot
          from throughout my career. I want to share this knowledge in form of
          videos during my free time. Feel free to watch (hopefully) educational
          and entertaining videos here.
        </p> */}
      </div>
    </section>
  );
};

export default About;
