import React from 'react'
import CustomHeading from './CustomHeading'
import CustomPara from './CustomPara'
import CustomButton from './CustomButton'

const Footer = () => {
  return (
    <div className='bg-blue flex flex-col justify-center items-center mx-auto w-full'>
      <div className='w-full xl:py-24 lg:py-20 md:py-26 py-12 mx-auto max-w-[1220px] max-xl:px-4 flex flex-col text-center items-center justify-center relative'>
        <img className='absolute pointer-events-none xl:max-w-[137px] lg:max-w-28 md:max-w-20 sm:max-w-16 max-w-12 top-0 left-0' src="./assets/image/png/footer-bg-shape-1.png" alt="side-img" />
        <img className='absolute pointer-events-none xl:max-w-[137px] lg:max-w-28 md:max-w-20 sm:max-w-16 max-w-12 bottom-0 right-0' src="./assets/image/png/footer-bg-shape-2.png" alt="side-img" />
        <div className='relative z-50 mx-auto flex flex-col items-center'>
          <CustomHeading className="lg:!mb-2 mb-1 !text-white" tittle="How does KeySemantics work?" />
          <CustomPara className="lg:!mb-16 md:!mb-12 sm:!mb-10 !mb-7 lg:!text-base !text-sm !text-white" tittle="Request a demo for your team and let us show you how KeySemantics can help your company" />
          <form className='max-w-lg'>
            <input type="text" required placeholder="Name" className="placeholder-Periwinkle max-w-xs w-full bg-fadeBlue lg:py-3.5 py-3 lg:px-5 px-4 rounded-full mb-2 text-Periwinkle outline-none" name="name" />
            <input type="email" required placeholder="Email" className="placeholder-Periwinkle max-w-xs w-full bg-fadeBlue lg:py-3.5 py-3 lg:px-5 px-4 rounded-full mb-2 text-Periwinkle outline-none" name="email" />
            <input type="text" required placeholder="Company" className="placeholder-Periwinkle max-w-xs w-full bg-fadeBlue lg:py-3.5 py-3 lg:px-5 px-4 rounded-full mb-2 text-Periwinkle outline-none" name="company" />
            <input type="number" placeholder="Phone (optional)" className="placeholder-Periwinkle max-w-xs w-full bg-fadeBlue lg:py-3.5 py-3 lg:px-5 px-4 rounded-full mb-2 text-Periwinkle outline-none" name="phone" />
            <CustomPara className="!text-[10px] !font-normal  max-sm:px-6 !leading-[140%] !tracking-[-1%] !text-Periwinkle !mt-2 lg:!mb-6 !mb-4" tittle="By submitting my contact information I agree to the KeySemantics Privacy Policy" />
            <CustomButton tittle="Request a demo" className="text-white hover:!border-white bg-aquaBlue lg:!max-w-[180px] !max-w-max max-h-[52px] xl:!px-7 lg:!px-6 md:!px-5 !px-4 lg:!py-4 !py-3" type="submit" />
          </form>
        </div>
      </div>
      <div className='bg-deepBlue w-full lg:py-6 md:py-5 py-4'>
        <div className='flex max-w-[1200px] max-xl:px-4 mx-auto w-full justify-between'>
          <div className="lg:w-6/12">
            <p className='text-xs tracking-[-1px] max-lg:pe-10 text-Periwinkle text-left lg:!leading-[233.33%] leading-relaxed'>
              ©{new Date().getFullYear()} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland</p>
          </div>
          <div className="flex flex-wrap">
            <div className="lg:w-6/12">
              <a className='underline underline-offset-1 tracking-[-1px] !leading-[233.33%] text-xs text-right text-Periwinkle' href="mailto:-info@keysemantics.ch">info@keysemantics.ch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer