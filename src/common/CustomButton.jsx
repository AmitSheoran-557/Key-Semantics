import React from 'react'

const CustomButton = (props) => {
  return (
  <button className={`px-3 py-3 text-sm max-w-[146px] w-full max-h-11 text-blue border-blue border rounded-full ${props.className}`}>{props.tittle}</button>
  )
}

export default CustomButton