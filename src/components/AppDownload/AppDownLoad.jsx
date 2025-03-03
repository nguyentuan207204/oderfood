import React from 'react'
import './AppDownLoad.css'
import 'react-icons/fa'
import { assets } from '../../assets/assets'
const AppDownLoad = () => {
  return (
    <div className='App-download' id='App-download'>
        <p>For Better Experience Download <br/> Food App</p>
        <div className='app-download-platforms'>
          {/* <a><FaAppStore/></a>
          <a><FaGooglePlay/></a> */}
          <img src={assets.app_store}/>
          <img src={assets.play_store}/>
        </div>
      
    </div>
  )
}

export default AppDownLoad
