import React from 'react'

const CustomPara = (props) => {
  return (
    <p className={`font-medium lg:text-2xl md:text-xl sm:text-lg text-base text-blue tracking-[-1%] leading-[133.33%]  ${props.className}`}>{props.tittle}</p>
  )
}

export default CustomPara