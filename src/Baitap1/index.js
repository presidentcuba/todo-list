import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Slider from './Slider'
import LaptopList from './LaptopList'
import PhoneList from './PhoneList'

export default function Baitap1() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <PhoneList />
      <LaptopList />
      <Footer />
    </div>
  )
}
