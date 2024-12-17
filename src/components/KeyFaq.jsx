import React, { useState } from 'react'
import CustomHeading from '../common/CustomHeading'
import { ACCORDION_DATA_LIST, FAQ_LIST } from './utils/helper';
import CustomButton from '../common/CustomButton'

const KeyFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col bg-lightGray justify-center items-center mx-auto w-full xl:pt-[140px] lg:pt-28 md:pt-7 pt-4'>
            <div className='w-full mx-auto max-w-[1220px] max-xl:px-4 flex flex-col text-center items-center justify-center relative'>
                <div className="flex flex-wrap w-full max-lg:justify-center max-lg:items-center mx-auto">
                    <div className='lg:w-6/12 px-3 w-full max-lg:flex justify-center'>
                        <img className='xl:max-w-[600px] lg:max-w-lg max-w-md xl:min-w-[600px] max-h-[337px] xl:min-h-[337px] w-full' src="./assets/image/png/faq-img.png" alt="faq-img" />
                    </div>
                    <div className='lg:w-6/12 xl:ps-12 ps-5 w-full max-lg:flex flex-col items-center max-lg:mt-10 max-sm:mt-7'>
                        <CustomHeading tittle="Key Q&A" className="!text-start !mb-2" />
                        <div className='text-start flex flex-col items-start lg:ps-5 ps-3 justify-start'>
                            {FAQ_LIST.map((obj, index) => (
                                <div key={index}>
                                    <ul>
                                        <li className='text-blue text-start list-disc lg:text-base text-sm !leading-[175%] mb-2'>
                                            {obj.para}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="max-w-[552px] mt-2 border-b-gray border-b text-blue w-full">
                            {ACCORDION_DATA_LIST.map((item, index) => (
                                <div key={index}>  {/* Key should be on the outer div */}
                                    <div className="flex items-center justify-between border-t-gray border-t py-3 cursor-pointer" style={{ height: '60px' }} onClick={() => handleToggle(index)}>
                                        <h2 className="text-lg font-medium">{item.title}</h2>
                                        <div className={`transform transition-transform lg:size-6 md:size-5 size-4 ${openIndex === index ? 'rotate-180' : ''} transition-all ease-in-out duration-300`}>
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                <path d="M1.25178 6.27599C1.33158 6.18849 1.42633 6.11908 1.53061 6.07173C1.63488 6.02437 1.74665 6 1.85952 6C1.9724 6 2.08416 6.02437 2.18844 6.07173C2.29272 6.11908 2.38746 6.18849 2.46727 6.27599L12 16.7255L21.5328 6.276C21.6126 6.18851 21.7073 6.11911 21.8116 6.07177C21.9159 6.02442 22.0277 6.00005 22.1405 6.00005C22.2534 6.00005 22.3652 6.02442 22.4694 6.07177C22.5737 6.11911 22.6685 6.18851 22.7483 6.276C22.8281 6.36348 22.8914 6.46734 22.9346 6.58165C22.9778 6.69595 23 6.81846 23 6.94218C23 7.0659 22.9778 7.18841 22.9346 7.30272C22.8914 7.41702 22.8281 7.52088 22.7483 7.60837L12.6078 18.724C12.528 18.8115 12.4332 18.8809 12.3289 18.9283C12.2247 18.9756 12.1129 19 12 19C11.8871 19 11.7754 18.9756 11.6711 18.9283C11.5668 18.8809 11.4721 18.8115 11.3923 18.724L1.25178 7.60836C1.17196 7.52089 1.10864 7.41703 1.06543 7.30272C1.02223 7.18842 0.999999 7.06591 0.999999 6.94218C0.999999 6.81845 1.02223 6.69594 1.06543 6.58163C1.10864 6.46733 1.17196 6.36347 1.25178 6.27599Z" fill="#191A42" />
                                            </svg>
                                        </div>
                                    </div>
                                    {openIndex === index && (
                                        <div className="pt-1">
                                            <p className="lg:text-base text-sm text-start !leading-[175%] mb-2">{item.contentAbove}</p>
                                            <p className="lg:text-base text-sm text-start !leading-[175%] lg:mb-4 mb-3">{item.contentAboveTwo}</p>
                                            <div className="flex gap-4 w-full justify-center items-center max-sm:px-3">
                                                <img className='xl:max-w-[268px] lg:max-w-48 sm:max-w-44 max-w-40 w-full max-h-[150px]' src={item.image} alt="accordion-img-1" />
                                                <img className='xl:max-w-[268px] lg:max-w-48 sm:max-w-44 max-w-40 w-full max-h-[150px]' src={item.imageTwo} alt="accordion-img-2" />
                                            </div>
                                            <p className="lg:text-base text-sm text-start my-4">{item.contentBelow}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <CustomButton className="hover:text-white lg:!mt-6 !mt-4 flex justify-start duration-300 ease-linear hover:bg-blue !px-3 lg:!py-3 !py-2 lg:!text-sm text-xs lg:max-w-[113px] max-w-max w-full max-h-11 text-blue border-blue border rounded-full" tittle="Get a demo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyFaq
