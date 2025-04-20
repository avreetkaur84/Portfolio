"use client"
import Head from "next/head";
import { motion, spring, useInView, useMotionValue, useSpring } from "framer-motion";
import AnimatedText from "../ui/utils/animatedText";
import LayoutUI from "../ui/layoutUI";
// import pic from "../../public/images/profile/avi-6.JPG"
import pic from "../../public/images/profile/avi-7.jpeg"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Skills from "../ui/about/skills";
import Education from "../ui/about/education";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);

            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

function About() {
    return (
        <>
            <Head>
                <title>Avreet | About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className="w-ful flex items-center justify-center flex-col">
                <LayoutUI classname="pt-16">
                    <AnimatedText text="Intuition Into Innovation!" classname="mb-16" />
                    <div className="w-full grid grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2>

                            <p className="font-medium text-justify">
                                Hi, I'm Avreet Kaur, a second-year Computer Science engineering student, passionate full-stack developer, and someone who's deeply curious about how tech can solve real-world problems. I started with the MERN stack, explored the depths of Next.js, and am now diving into live projects.
                            </p>

                            <p className="my-4 font-medium text-justify">
                                I believe that development isn't just about writing code—it's about building meaningful solutions. Whether it’s crafting seamless UIs, building scalable backend systems, or solving complex DSA problems, I bring intention, empathy, and constant learning to everything I do.
                            </p>

                            <p className="my-4 font-medium text-justify">
                                I’m also deeply interested in the intersection of technology and mental health, exploring how innovative solutions can help address issues like anxiety and depression. 
                            </p>

                            <p className="font-medium text-justify">
                                Outside of tech, I’m drawn toward spirituality, books, and the challenges of self-discipline—each shaping me as much as my code does. I’m on a journey to grow, learn, and contribute—and I’m always up for a new challenge or a project that pushes my limits.
                            </p>
                        </div>

                        <div className="col-span-3 h-9/10 rounded-2xl border-2 border-solid border-dark bg-light p-7 relative">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image src={pic} alt="avreet" className="w-full h-99/100 rounded-2xl" />
                        </div>

                        <div className="col-span-2 flex flex-col pb-16 items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value="8.54" />+</span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">BE-CSE CPGA</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value="8" />+</span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Projects Completed</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold"><AnimatedNumbers value="5" />+</span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">Hackathons Participation</h2>
                            </div>
                        </div>
                    </div>

                    <Skills/>
                    <Education />
                </LayoutUI>
            </main>
        </>
    )
}

export default About;