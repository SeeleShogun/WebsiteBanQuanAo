import React from 'react'
import './AppDownload.scss'

function ScrollToTop(){
  window.scrollTo(0,0)
}

import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> MaleFashion App</p>
        <div className="app-download-platforms">
            <img onClick={ScrollToTop} src={assets.play_store} alt="" /> 
            <img onClick={ScrollToTop} src={assets.app_store} alt="" />
            
        </div>
    </div>
  )
}

export default AppDownload