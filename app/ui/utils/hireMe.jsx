import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className="w-48 h-auto flex justify-center items-center relative">
            <CircularText className={`fill-dark animate-spin`} />

            <Link href="mailto:avreetkaur084@gmail.com" className='flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light border border-solid border-dark w-20 h-20 rounded-full shadow-md font-semibold hover:bg-light hover:text-dark '>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe