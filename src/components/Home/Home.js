import React from 'react'
import Footer from './Footer/Footer'
import { Profile } from './Profile/Profile'
import './Home.scss'
import { Header } from './Header/Header'

export const Home = (props) => {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}
