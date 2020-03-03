import './main.css'
import React from 'react'
import useGlobal from '../../Store'
import CTAHeader from '../../Components/Home/CTAHeader/cta-header.component'
import DetailsSection from '../../Components/Home/DetailsSection/details-section.component'

const MainScreen = ({ handlers }) => {

    return (
      <div>
        <CTAHeader />
        <DetailsSection />
      </div>
    )
  }
  
  export default MainScreen
  

