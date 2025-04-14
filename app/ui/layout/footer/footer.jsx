import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <div className="py-8 p-32 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className="flex items-center ">
                Developed by &nbsp; <span className='text-red-500 text-2xl'>&#9825;</span> <Link href="/" >&nbsp;<span className='underline underline-offset-2'>Avreet Kaur</span></Link>
            </div>
            {/* <Link href="/" >Say Hello</Link> */}
        </div>
    </div>
  )
}

export default Footer