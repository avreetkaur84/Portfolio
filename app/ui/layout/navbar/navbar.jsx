"use client"
import Link from 'next/link'
import React from 'react'
import Logo from '../../utils/logo'
import { usePathname } from 'next/navigation'
import { GithubIcon, Gmail, LinkedInIcon, TwitterIcon } from '../../utils/icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
    const pathname = usePathname();
    // console.log(pathname);

    return (
        <Link href={href} className={`${className} text-lg relative group`}>
            {title}
            <span className={`h-[1px] bg-black inline-block absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${pathname == href ? "w-full" : "w-0"}
            `}>
                &nbsp;
            </span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header className='border-2 w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='m-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/tech_trails" title="Tech Trails" className='ml-4' />
            </nav>

            <nav className='flex justify-center items-center flex-wrap'>
                {/* target={"_blank"} - to open the link in next tab */}
                <motion.a href="https://github.com/avreetkaur84" target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.9}}
                    className='w-7 mr-5'
                >
                    <GithubIcon />
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/avreet-kaur" target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.9}}
                    className='w-7 mx-5'
                > 
                    <LinkedInIcon /> 
                </motion.a>
                
                <motion.a href="https://x.com/Avreet__Kaur" target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.9}}
                    className='w-7 mx-5'
                > 
                    <TwitterIcon /> 
                </motion.a>

                {/* <motion.a href="https://x.com/Avreet__Kaur" target={"_blank"}
                    whileHover={{y:-3}}
                    whileTap={{scale: 0.9}}
                    className='w-6 ml-5'
                > 
                    <Gmail/>
                </motion.a> */}

            </nav>

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export default Navbar