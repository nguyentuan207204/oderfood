import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
              <img className='logo' src={assets.logo} />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              Lorarlesirie ioke cumns teta heprin</p>
              <div className='footer-social-icons'>
                <a href="https://www.facebook.com/Alexnguyen.tuan"><FaFacebook/></a>
                <a href="https://www.instagram.com/_nguyentuankhongon/"><FaInstagram/></a>
                <a href="https://github.com/nguyentuan207204"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/tu%E1%BA%A5n-nguy%E1%BB%85n-0b8b9a288/"><FaLinkedinIn/></a>
              </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privaci policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+84-374-562-119</li>
                    <li>nguyentuan207204@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr/>
    </div>
  )
}

export default Footer
