import React from 'react'

const Cards = (props) => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center relative max-xl:px-4'>
                <div className={`flex flex-wrap w-full ${props.className}`}>
                    <div className={`lg:w-6/12 max-lg:pb-7 mx-auto flex flex-col justify-center items-end ${props.classNameTwo}`}>
                        <div>
                            <h3 className={`font-bold ! leading-[225%] lg:text-[32px] text-2xl tracking-[-1px] text-center text-blue ${props.className}`}>{props.heading}</h3>
                            <ul className='lg:mb-6 mb-4 lg:ps-5 ps-3'>
                                {props.list.map((obj, index) => (<li className='text-start text-blue lg:text-base text-sm lg:mb-2 mb-1 !tracking-[-1%] list-disc max-w-[552px] !leading-[175%]' key={index}>{obj}</li>))}
                            </ul>
                            <button className='hover:text-white duration-300 ease-linear hover:bg-blue px-3 lg:py-3 py-2 lg:!text-sm text-xs lg:max-w-[113px] max-w-max w-full max-h-11 text-blue border-blue border rounded-full'>{props.btnTittle}</button>
                        </div>
                    </div>
                    <div className={`lg:w-6/12 w-full flex items-center text-end mx-auto justify-end max-lg:justify-center ${props.classNameThree}`}>
                        <img className='xl:max-w-[600px] lg:max-w-md max-w-lg max-h-[337px] w-full' src={props.cardImg} alt="card-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards