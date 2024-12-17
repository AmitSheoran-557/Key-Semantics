import React from 'react'
import Header from '../common/Header'
import CustomPara from '../common/CustomPara'
import CustomButton from '../common/CustomButton'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full xl:pb-[287px] relative lg:pb-52 md:pb-40 sm:pb-24 pb-12 bg-hero-bg bg-center bg-lightGray bg-cover'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center'>
                <Header />
                <h1 className='font-bold xl:text-[64px] relative lg:text-6xl md:text-5xl sm:text-4xl text-3xl max-lg:max-w-lg max-sm:max-w-sm max-sm:px-4 max-w-2xl text-center mx-auto text-blue xl:mb-10 lg:mb-8 md:mb-6 mb-4 tracking-[-1px] !leading-[112.5%]'>AI-Powered Search as a Service</h1>
                <CustomPara className="xl:!mb-12 relative lg:!mb-10 md:!mb-7 !mb-4 !leading-[133.33%] max-sm:px-10" tittle="Unlock your content with KeySemantics." />
                <CustomButton className="xl:!px-8 xl:!py-5 relative lg:!px-7 lg:!py-4 md:!px-6 sm:!px-5 px-3 md:!py-3 !py-2 hover:!bg-transparent hover:!text-blue !font-medium !text-white !bg-blue !max-h-[60px] lg:!max-w-[154px] max-sm:max-w-28 w-full" tittle="Get started" />
            </div>
        </div>
    )
}

export default Hero