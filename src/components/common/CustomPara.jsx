import React from 'react'

const CustomPara = (props) => {
  return (
    <p className={`font-medium lg:text-2xl text-xl text-blue tracking-[-1px] leading-[133.33%]  ${props.className}`}>{props.tittle}</p>
  )
}

export default CustomPara