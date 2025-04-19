"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cpp from "../../../public/images/skills/c++.png"
import js from "../../../public/images/skills/js.png"
import nextjs from "../../../public/images/skills/nextjs.png"
import python from "../../../public/images/skills/python.png"
import react from "../../../public/images/skills/react.png"
import dbms from "../../../public/images/skills/dbms.png"
import dsa from "../../../public/images/skills/dsa.png"
import mui from "../../../public/images/skills/mui.png"
import aceternity from "../../../public/images/skills/aceternity.png"
import redux from "../../../public/images/skills/redux.png"
import tailwindcss from "../../../public/images/skills/tailwindcss.png"
import git from "../../../public/images/skills/git.png"
import vercel from "../../../public/images/skills/vercel.png"
import vscode from "../../../public/images/skills/vscode.png"
import postman from "../../../public/images/skills/postman.png"

import SkillSection from './skillSection'

const programmingSkills = [
  {
    name: "C++",
    image: cpp
  },
  {
    name: "Python",
    image: python,
  },
  {
    name: "JavaScript",
    image: js
  }
]

const csConcepts = [
  { name: "DSA", image: dsa },
  { name: "DBMS", image: dbms },
]

const libraries = [
  {
    name: "NextJs",
    image: nextjs
  },
  {
    name: "React",
    image: react
  },
  {
    name: "Redux",
    image: redux
  },
  {
    name: "TailwindCSS",
    image: tailwindcss
  },
  {
    name: "Aceternity UI",
    image: aceternity
  },
]

const tools = [
  {
    name: "Git",
    image: git
  },
  {
    name: "Vercel",
    image: vercel
  },
  {
    name: "Visual Studio",
    image: vscode
  },
  {
    name: "Postman",
    image: postman
  },
  
]

const Skills = () => {
  return (
    <div className='w-full my-64'>
      <h1 className='font-bold text-7xl text-center mb-32'>Skills</h1>

      <div className="grid grid-cols-16 gap-4 px-5"
      >
        <SkillSection section="Programming Languages" content={programmingSkills} />

        <SkillSection section="CS Concepts" content={csConcepts} />

        <SkillSection section="Libraries and Frameworks" content={libraries} />

        <SkillSection section="Tools and Frameworks" content={tools} />

      </div>
    </div>
  )
}

export default Skills