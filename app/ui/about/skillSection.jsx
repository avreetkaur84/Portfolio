import React from 'react'
import SkillsCard from './skillsCard'

const SkillSection = ({ section, content }) => {
    return (

        <div className="col-span-4 px-5">
            <h1 className='text-center font-bold text-xl pb-5 underline underline-offset-2'>
                {section}
            </h1>

            <div className="">
                {/* <SkillsCard name="C++" image={cpp} /> */}
                {content.map((skill) => {
                    return (
                        <div className=""
                            key={skill.name}
                        >
                            <SkillsCard name={skill.name} image={skill.image} />
                        </div>
                    )

                })}
            </div>


        </div>

    )
}

export default SkillSection