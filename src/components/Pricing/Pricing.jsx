import React from 'react'
import SimplifiedPricing from './SimplifiedPricing'
import ListingRent from './ListingRent'
import AreLandlord from '../Home/AreLandlord'

const Pricing = () => {
  return (
    <div>
        <SimplifiedPricing />
        <ListingRent />
        <AreLandlord />
    </div>
  )
}

export default Pricing