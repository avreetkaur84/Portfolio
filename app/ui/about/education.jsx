"use client"
import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from '../utils/liIcon'

const Deatils = ({ degree, start_year, end_year, university, description }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref} />
            <motion.div className=""
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type: "spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>{degree}</h3>
                <span className='capitalize font-medium text-dark/75'>{start_year}-{end_year} | {university}</span>
                <p className='font-medium w-full text-justify'>{description}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );


    return (
        <div className='my-64'>
            <h1 className='font-bold text-7xl text-center mb-32'>Education</h1>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Deatils
                        degree="Bachelor of Engineering in Computer Science"
                        start_year="2023"
                        end_year="2027"
                        university="Chandigarh University"
                        description="Studied core computer science concepts such as Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Computer Organization and Architecture (COA), along with other foundational engineering subjects. Maintained a strong academic record with a current CGPA of 8.55."
                    />

                    <Deatils
                        degree="Intermediate (ISCE)"
                        start_year="2021"
                        end_year="2022"
                        university="Gian Jyoti Senior Secondary School, Talwandi Bhai"
                        description="Completed 12th grade with a focus on science stream under ISCE board, achieving a percentage of 90.5%."
                    />

                    <Deatils
                        degree="Matriculation (ICSE)"
                        start_year="2019"
                        end_year="2020"
                        university="Gian Jyoti Senior Secondary School, Talwandi Bhai"
                        description="Completed 10th grade under ICSE board with a percentage of 82.4%."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education