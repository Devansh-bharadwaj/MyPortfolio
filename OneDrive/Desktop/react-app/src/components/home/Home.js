import React from 'react'
import FeaturedProducts from './component/FeaturedProducts'
import Herosection from './component/Herosection'
import Services from './component/Services'
import Trusted from './component/Trusted'

function Home() {
  const data = {
    name: 'SHOPPING ZONE' 
  }
  return (
    <div>
      <Herosection myData={data}/>
      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home