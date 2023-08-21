import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Community from '../components/Community'
import Payment from '../components/Payment'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Community/>
      <Payment/>
      <Footer/>
    </div>
  )
}

export default Home