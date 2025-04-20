import Image from "next/image";
import LayoutUI from "./ui/layoutUI";
import profileImg from "../public/images/profile/dreamy.png"
import AnimatedText from "./ui/utils/animatedText";
import Link from "next/link";
import { LinkArrow } from "./ui/utils/icons";
import HireMe from "./ui/utils/hireMe";
import bulb from "../public/images/svgs/Bulb.svg"


export default function Home() {
  return (
    <div className="flex items-center min-h-screen w-full text-dark">
      <LayoutUI classname="pt-0">
        <div className="flex items-center justify-center w-full ">

          <div className="w-1/2 flex items-center justify-start ">
            <Image src={profileImg} alt="avreet" className="w-9/10 h-auto" />
          </div>

          <div className="w-1/2 flex flex-col items-center self-center ">
            <AnimatedText text="Turning Curiosity Into Code, Taking challenge a Time" classname="!text-7xl !text-left" />

            <p className="my-4 font-medium text-md text-justify">I’m <span className="font-bold">Avreet Kaur</span>, a second year computer science undergrad, full-stack web developer, and a curious soul chasing growth through code. Not perfect, just passionate — learning, building, and evolving every day.</p>

            <div className="flex items-center self-start mt-2">
              <Link href="./Resume_4Sem.pdf" target={"_blank"} className="flex items-center bg-black text-light p-2.5 px-6 font-semibold text-lg rounded-lg hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              download={true}
              >
                Resume
                <LinkArrow className="ml-1 w-6" />
              </Link>
              <Link href="mailto:avreetkaur084@gmail.com"
                className="ml-5 font-medium capitalize text-dark text-xl underline dark:text-light"
              >
                Contact
              </Link>
            </div>
          </div>

        </div>

      </LayoutUI>

      <HireMe/> 

      <div className="absolute right-10 bottom-16 w-24">
        <Image src={bulb} className="w-full h-auto" alt="avreet"/>
      </div>
    </div>

  );
}