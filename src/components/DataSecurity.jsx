import React from 'react'
import Cards from '../common/Cards'
import { DATA_SECURITY_CARD_LIST } from './utils/helper'

const DataSecurity = () => {
  return (
    <div className='xl:pt-[148px] lg:pt-28 md:pt-20 sm:pt-12 pt-4 xl:pb-[164px] lg:pb-32 md:pb-20 sm:pb-16 pb-12 bg-lightGray'>
    <Cards heading="Data Security and Hosting" className="flex-row-reverse text-start justify-between" classNameThree="lg:!justify-start" btnTittle="Get a demo" list={DATA_SECURITY_CARD_LIST} cardImg={"./assets/image/png/card-img-2.png"}/>
    </div>
  )
}

export default DataSecurity