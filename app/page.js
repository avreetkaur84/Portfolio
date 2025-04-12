import Image from "next/image";
import LayoutUI from "./ui/layoutUI";
import profileImg from "../public/images/profile/1avi.png"
import AnimatedText from "./ui/utils/animatedText";
import Link from "next/link";
import { LinkArrow } from "./ui/utils/icons";



export default function Home() {
  return (
    <div className="flex items-center min-h-screen w-full text-dark">
      <LayoutUI classname="pt-0">
        <div className="flex items-center justify-between w-full">

          <div className="w-1/2 flex items-center justify-start">
            <Image src={profileImg} alt="avreet" className="w-3/4 h-auto" />
          </div>

          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Curiosity Into Code, One Challenge at a Time" classname="!text-6xl !text-left" />

            <p className="my-4 font-medium text-base">I’m a second year computer science undergrad, full-stack web developer, and a curious soul chasing growth through code. Not perfect, just passionate — learning, building, and evolving every day.</p>

            <div className="flex items-center self-start mt-2">
              <Link href="./Resume_4Sem.pdf" target={"_blank"} className="flex items-center bg-black text-light p-2.5 px-6 font-semibold text-lg rounded-lg hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              download={true}
              >
                Resume
                <LinkArrow className="ml-1 w-6" />
              </Link>
              <Link href="mailto:avreetkaur084@gmail.com"
                className="ml-5 font-medium capitalize text-dark text-xl underline"
              >
                Contact
              </Link>
            </div>
          </div>

        </div>

      </LayoutUI>
    </div>
  );
}