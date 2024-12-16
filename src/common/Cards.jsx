import React from 'react'

const Cards = (props) => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center relative'>
                <div className="flex flex-wrap w-full lg:my-[148px]">
                    <div className='lg:w-6/12 py-[30px] flex flex-col justify-center'>
                        <h3 className='font-bold leading-[225%] lg:text-[32px] text-2xl tracking-[-1px] text-center text-blue'>{props.heading}</h3>
                        <ul className='lg:mb-6 mb-4'>
                            {props.list.map((obj, index) => (
                                <li className='text-start list-disc max-w-[552px] !leading-[175%]' key={index}>
                                    {obj}
                                </li>
                            ))}
                        </ul>
                        <button className='`px-3 py-3 text-sm max-w-[146px] w-full max-h-11 text-blue border-blue border rounded-full'> {props.button}</button>
                    </div>
                    <div className="w-6/12">
                        <img className='max-w-[600px]' src="./assets/image/png/card-img-1.png" alt="card-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards