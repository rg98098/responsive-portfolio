import React from 'react'
import Footer from './Footer/Footer'
import { Profile } from './Profile/Profile'
import './Home.scss'

export const Home = () => {
  return (
    <div className="home-container">
      <Profile/>
      <Footer/>
    </div>
  )
}
