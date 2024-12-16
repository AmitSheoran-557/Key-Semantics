import React from 'react'
import CustomHeading from "../common/CustomHeading";
import { KEY_SEMANTICS_LIST } from './utils/helper';

const SemanticsWork = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full lg:pt-24 pb-6'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center relative'>
                <CustomHeading tittle="How does KeySemantics work?" className="lg:pb-10 pb-7" />
                <div className='flex flex-wrap w-full '>
                    {KEY_SEMANTICS_LIST.map((obj, index) => (
                        <div className='lg:w-4/12 md:w-6/12 w-full flex flex-col justify-start items-center mx-auto mt-[16px]' key={index}>
                            <div className='max-w-[278px] w-full'>
                                <div className='py-[38px] rounded-lg mb-6' style={obj.bgcolor}>
                                    <img className='max-w-[138px] w-full max-h-[115px] mx-auto' src={obj.image} alt={obj.alt} />
                                </div>
                                <p className='max-w-[278px] w-full text-blue lg:text-base text-sm !leading-[175%]'>{obj.description}</p>
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