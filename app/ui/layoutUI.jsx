import React from 'react'

const LayoutUI = ({children, classname=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-32 dark:bg-dark dark:text-light ${classname}`}>
        {children}
    </div>
  )
}

export default LayoutUI