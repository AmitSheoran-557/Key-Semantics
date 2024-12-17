import React from 'react'
import CustomHeading from "../common/CustomHeading";
import { KEY_SEMANTICS_LIST } from './utils/helper';
import Lottie from 'react-lottie-player'

const SemanticsWork = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full lg:pt-24 pt-12'>
            <div className='w-full mx-auto max-w-[1220px] flex max-xl:px-4 flex-col text-center items-center justify-center relative'>
                <CustomHeading tittle="How does KeySemantics work?" className="lg:!pb-10 md:!pb-7" />
                <div className='flex flex-wrap w-full '>
                    {KEY_SEMANTICS_LIST.map((obj, index) => (
                        <div className='lg:w-4/12 md:w-6/12 w-full flex flex-col justify-start items-center mx-auto lg:mt-4 mt-5' key={index}>
                            <div className='max-w-[278px] w-full'>
                                <div className='rounded-lg lg:mb-6 md:mb-3 mb-2' style={obj.bgcolor}>
                                    <Lottie
                                        loop
                                        animationData={obj.lottie}
                                        play
                                        style={{ width: 278, height: 190 }}
                                    />
                                </div>
                                <p className='xl:min-w-[284px] max-w-[278px] !tracking-[-1%] w-full text-blue lg:text-base text-sm !leading-[175%]'>{obj.description}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SemanticsWork