import React from 'react'

const CustomHeading = (props) => {
    return (
        <h3 className={`font-bold lg:!leading-[225%] lg:text-[32px] text-2xl tracking-[-1%] text-center text-blue ${props.className}`}>{props.tittle}</h3>
    )
}

export default CustomHeading