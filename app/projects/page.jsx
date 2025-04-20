import Head from "next/head";
import LayoutUI from "../ui/layoutUI";
import AnimatedText from "../ui/utils/animatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../ui/utils/icons";
import medDroneX from "../../public/images/projects/medDroneX.png"
import AoLearn from "../../public/images/projects/AoLearn.png"

// const FeaturedProject = ({ type, title, summary, img, link, github }) => {
//     return (
//         <article className="w-full flex items-center justify-between border border-solid border-dark rounded-3xl bg-light">
//             <Link href={link} target="_blank" >
//                 <Image src={img} alt={title} className="w-full h-auto" />
//             </Link>

//             <div className="">
//                 <span>{type}</span>
//                 <Link href={link} target="_blank" >
//                     <h2>{title}</h2>
//                 </Link>
//                 <p>{summary}</p>

//                 <div className="">
//                     <Link href={github} target="_blank" >
//                         <GithubIcon />
//                     </Link>
//                     <Link href={link} target="_blank" >
//                         Visit Project
//                     </Link>
//                 </div>
//             </div>
//         </article>
//     )
// }

const Project = ({ title, type, img, link, github }) => {

    return (
        <div className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Link href={link} target="_blank" 
            className="w-full cursor-pointer overflow-hidden rounded-lg border border-dark border-solid "
            >
                <Image src={img} alt={title} className="w-full h-[300px] " />
            </Link>

            <div className="w-full flex flex-col justify-center items-center mt-4 dark:bg-light dark:text-dark">
                <span className="text-primary font-medium text-xl flex self-start" >{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2 flex self-start">
                    <h2 className="my-2 w-full text-3xl font-bold ">{title}</h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="ml-4 text-lg font-medium underline " >
                        Visit
                    </Link>

                    <Link href={github} target="_blank" className="w-10" >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}


function Projects() {
    return (
        <>
            <Head>
                <title>Avreet | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <LayoutUI classname="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" classname="pb-32" />

                    <div className="grid grid-cols-12 gap-24">
                        {/* <div className="col-span-6">
                            <FeaturedProject />
                        </div> */}

                        <div className="col-span-6">
                            <Project
                                type="Landing Page"
                                title="AO Learn"
                                img={AoLearn}
                                link="https://ao-learn-v2.vercel.app/"
                                github="https://github.com/avreetkaur84/AoLearnV2"
                            />
                        </div>

                        <div className="col-span-6">
                            <Project
                                type="Full Stack Project"
                                title="Medical Drone Delivery System"
                                img={medDroneX}
                                link="https://med-dronex.vercel.app/"
                                github="https://github.com/avreetkaur84/MedDroneX"
                            />
                        </div>

                        {/* <div className="col-span-6">
                            <Project
                                type="Full Stack Project"
                                title="Medical Drone Delivery System"
                                img={medDroneX}
                                link="https://med-dronex.vercel.app/"
                                github="https://github.com/avreetkaur84/MedDroneX"
                            />
                        </div> */}
                    </div>
                </LayoutUI>
            </main>
        </>
    )
}

export default Projects;