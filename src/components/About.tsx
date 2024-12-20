const About = () => {
  return (
    <section id="about" className="flex flex-col gap-3 lg:px-3 mb-16 lg:mb-36">
      <div className="lg:hidden font-bold text-base uppercase text-foreground">
        About
      </div>
      <div className="flex flex-col gap-5 text-base text-muted-foreground">
        <p className="">
          From my educational background, I designed, manufactured, and analyzed
          mechanical systems. During my journey, I stumbled across the field of
          robotics. At first, I thought it was cool to build the physical
          hardware (I still do), but what really peaked my interest was the
          software behind the autonomous behaviors.
        </p>
        <p className="">
          This interest has led me to develop autonomy software for robots that
          have traversed through land, air, and sea. Most of my contributions
          and expertise is in GNC (Guidance, Navigation, and Control). Lately,
          my focus has been more upstream where I get to be more involved with
          perception and mapping, and I hope to stay in this realm.
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
