import React from 'react'

const CustomButton = (props) => {
  return (
  <button className={`px-3 py-3 md:text-sm text-xs max-w-[146px] w-full max-h-11 hover:text-white duration-300 ease-linear hover:bg-blue text-blue border-blue border rounded-full ${props.className}`}>{props.tittle}</button>
  )
}

export default CustomButton