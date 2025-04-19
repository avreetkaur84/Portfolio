import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const SkillsCard = ({name, image}) => {
  return (
    <div>
        <motion.div className="flex items-center justify-between py-4 px-10 w-full my-8 rounded-2xl bg-light shadow shadow-md hover:shadow-xl"
          whileHover={{scale: 1.1}}
        >
            <h3 className='text-xl font-semibold'>{name}</h3>
            <Image src={image} alt={name} className='h-9 w-9 mr-2'/>
        </motion.div>
    </div>
  )
}

export default SkillsCard