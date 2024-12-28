import React from 'react'
import ProductCards from '../ProductCards/ProductCards'

function AllProducts({category}) {

  return (
    <div>
      <ProductCards category={category} />
    </div>
  )
}

export default AllProducts
