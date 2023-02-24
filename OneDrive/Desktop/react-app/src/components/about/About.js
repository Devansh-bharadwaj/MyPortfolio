import React from 'react'
import Herosection from '../home/component/Herosection'
import { useProductContext } from '../usecontext';

function About() {
  const { myName } = useProductContext();
  const data = {
    name: "E-COMMERCE" 
  }
  return (
    <div>
      {myName}
      <Herosection myData={data}/>
    </div>
  )
}

export default About