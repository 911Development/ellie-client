import Container from "@/components/Container";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FocusCards } from "@/components/ui/focus-cards";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LampContainer } from "@/components/ui/lamp";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "Moonbeam",
    link: "https://www.ecobee.com/",
    thumbnail: "/products/ecobee_logo.png",
  },
  {
    title: "Cursor",
    link: "https://store.google.com/regionpicker?hl=en-US&pli=1",
    thumbnail: "/products/google_nest_logo.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/products/igloohome_logo.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/products/nuki_logo.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/products/sensibo_logo.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/products/sonof_logo.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/products/tado_logo.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/products/yale_logo.png",
  },
];

const cards = [
  {
    title: "Smart Hue",
    src: "/products/hue.jpg",
  },
  {
    title: "Smart Air",
    src: "/products/air.jpg",
  },
  {
    title: "Smart Plug",
    src: "/products/plug.jpg",
  },
  {
    title: "Smart Lock",
    src: "/products/lock.jpg",
  },
];

const words = [
  {
    text: "Everything",
  },
  {
    text: "is",
  },
  {
    text: "easy",
  },
  {
    text: "with",
  },
  {
    text: "ELLIE.",
    className: "text-primary",
  },
];

const content = [
  {
    title: "Innovation",
    description:
      "AI-driven interface learns user habits over time, creating personalized automation routines that simplify tasks and save energy. With robust voice and app controls, Ellie ensures accessibility and convenience, while its focus on data privacy provides peace of mind. The system's modular architecture allows for easy scalability, making it the ideal solution for smart homes of any size.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/innovation.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Maintenance",
    description:
      "Predictive maintenance and fault detection. Using AI-powered analytics and IoT sensors, Ellie can monitor the performance of connected devices, such as HVAC systems, appliances, and smart locks, to predict potential issues before they occur.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/maintenance.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Adjusments",
    description:
      "Ellie could incorporate sensors and devices that monitor indoor air quality, temperature, humidity, and even noise levels to ensure optimal living conditions. Using this data, the system could provide real-time adjustments to improve the environment, such as purifying air, adjusting lighting to match circadian rhythms, or playing calming sounds to reduce stress.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/real-time.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Immersive Technology",
    description:
      "AR (Augmented Reality) and smart projectors to transform spaces dynamically. For example, walls could display virtual art, change colors to suit moods, or provide immersive environments for gaming or relaxation. With sensors detecting room occupancy, Ellie could personalize settings such as lighting, sound, and projected visuals to suit each individual’s preferences.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/immersive.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <section>
      <section className="relative">
        <BackgroundBeamsWithCollision className="top-0 left-0">
          <Container className={"lg:flex lg:items-center lg:justify-between"}>
            <section className="lg:w-[50%]">
              <h1 className="text-4xl lg:text-7xl text-center lg:text-start font-bold text-dark">
                BUILD YOUR <span className="text-primary">SMART HOME</span>{" "}
                PERFECT
              </h1>
              <br />
              <p className="lg:text-xl font-semibold text-center lg:text-start text-gray-400 lg:w-2/3">
                Transforming houses into smart spaces with Ellie Smart Home
                Assistant. Your home, smarter than ever before!
              </p>
              <br />
              <section className="lg:flex items-center gap-4 hidden">
                <Link
                  href={"#products"}
                  className="flex items-center gap-2 font-semibold text-primary hover:bg-primary hover:text-white rounded-lg p-1 hover:p-3 transition-all"
                >
                  <span>Smart Products</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </Link>
              </section>
            </section>
            {/* <img
            src={"/main_icons.png"}
            width={664}
            height={664}
            className="w-[40%] opacity-90"
          /> */}
            {/* <motion.div> */}
            <img
              src={"/smart_home.png"}
              className="w-[85%] lg:w-[40%] opacity-95 mx-auto hover:scale-105 hover:-rotate-1 transition-all mb-8 lg:mb-0"
              width={960}
              height={840}
            />
            {/* </motion.div> */}
            <section className="flex items-center justify-center gap-4 lg:hidden">
              <Link
                href={"#products"}
                className="flex items-center gap-2 font-semibold text-white bg-primary rounded-lg py-2 px-4 transition-all"
              >
                <span>Smart Products</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </Link>
            </section>
          </Container>
        </BackgroundBeamsWithCollision>
      </section>
      <section className="my-12">
        <Container>
          <ul className="flex items-center justify-center gap-24">
            <li className="text-center opacity-75">
              <span className="text-primary text-2xl lg:text-4xl">40+</span>
              <br />
              <span className="text-gray-400">Smart Products</span>
            </li>
            <li className="text-center opacity-75">
              {/* <span className="text-primary text-4xl">40+</span> */}
              <img
                src={"/android_ios.png"}
                width={72}
                height={60}
                className="w-10 lg:w-12 mx-auto mb-1"
              />
              <span className="text-gray-400">Platform Support</span>
            </li>
            <li className="text-center opacity-75">
              {/* <span className="text-primary text-4xl">40+</span> */}
              <img
                src={"/layers.png"}
                width={50}
                height={50}
                className="w-10 mx-auto mb-1"
              />
              <span className="text-gray-400">Modern</span>
            </li>
          </ul>
        </Container>
      </section>
      <section>
        <LampContainer>
          <motion.p
            initial={{ y: 0 }}
            whileInView={{ y: [0, -120] }}
            transition={{ ease: "easeOut", duration: 1 }}
            // whileInView={true}
            className="text-white text-center text-2xl font-semibold w-2/3"
          >
            Transforming houses into smart spaces
          </motion.p>

          <HeroHighlight className="font-semibold text-center text-3xl">
            <span className="text-white">
              ELLIE is designed entirely with your needs
            </span>
            &nbsp;
            <Highlight>in mind!</Highlight>
          </HeroHighlight>
        </LampContainer>
      </section>
      <section>
        <ContainerScroll />
      </section>
      <section id="products">
        <Container>
          <section className="mb-12">
            <TypewriterEffectSmooth words={words} />
          </section>
          <section>
            <FocusCards cards={cards} />
          </section>
        </Container>
      </section>
      <section id="partnerships">
        <HeroParallax products={products} />
      </section>
      <section id="about">
        <StickyScroll content={content} />
      </section>
    </section>
  );
}
