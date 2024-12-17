import React from 'react'
import Cards from '../common/Cards'
import { SEARCH_CARD_LIST } from './utils/helper'

const HeadlessSearch = () => {
  return (
    <div className='xl:pt-[148px] lg:pt-28 md:pt-20 sm:pt-16 pt-12  bg-lightGray'>
        <Cards heading="Headless federated search" className="text-start" classNameTwo="!items-start" btnTittle="Get a demo" list={SEARCH_CARD_LIST} cardImg={"./assets/image/png/card-img-1.png"}/>
    </div>
  )
}

export default HeadlessSearch