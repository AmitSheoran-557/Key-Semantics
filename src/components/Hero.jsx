import React from 'react'
import Header from './common/Header'
import CustomPara from './common/CustomPara'
import CustomButton from './common/CustomButton'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full lg:pb-[287px] bg-hero-bg bg-cover'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center relative'>
                <img className='max-w-[498px] max-h-[741px] w-full absolute -z-40' src="./assets/image/png/hero-text-bg.png" alt="bg-img" />
                <Header />
                <h1 className='font-bold text-[64px] max-w-2xl text-center mx-auto text-blue xl:mb-10 lg:mb-8 mb-6 tracking-[-1px] leading-[112.5%]'>AI-Powered Search as a Service</h1>
                <CustomPara className="xl:mb-12 lg:mb-10 mb-7" tittle="Unlock your content with KeySemantics." />
                <CustomButton className="!px-8 !py-5 !font-medium !text-white !bg-blue !max-h-[60px] !max-w-[154px] w-full" tittle="Get started" />
            </div>
        </div>
    )
}

export default Hero