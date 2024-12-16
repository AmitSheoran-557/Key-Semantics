import React from 'react'
import CustomHeading from './CustomHeading'
import CustomButton from './CustomButton'
import { SEARCH_CARD_LIST } from '../utils/helper'

const Cards = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center relative'>
                <div className="flex flex-wrap w-full lg:my-[148px]">
                <div className='lg:w-6/12 py-[30px] flex flex-col justify-center'>
                    <CustomHeading tittle="Headless federated search" className="text-start" LIST={SEARCH_CARD_LIST} />
                    <ul className='lg:mb-6 mb-4'>
                        {SEARCH_CARD_LIST.map((obj, index) => (
                            <li className='text-start list-disc max-w-[552px] !leading-[175%]' key={index}>
                                {obj}
                            </li>
                        ))}
                    </ul>
                    <CustomButton className="!text-blue flex justify-center !py-3 !px-3 !max-w-[113px] w-full" tittle="Get a demo" />
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