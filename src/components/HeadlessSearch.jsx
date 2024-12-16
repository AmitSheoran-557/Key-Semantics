import React from 'react'
import Cards from '../common/Cards'
import { SEARCH_CARD_LIST } from './utils/helper'

const HeadlessSearch = () => {
  return (
    <div>
        <Cards heading="Headless federated search" list={SEARCH_CARD_LIST}/>
    </div>
  )
}

export default HeadlessSearch