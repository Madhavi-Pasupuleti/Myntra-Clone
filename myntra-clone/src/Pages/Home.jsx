import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Wardrobe from '../components/Wardrobe'

function Home() {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Slider />
        <Wardrobe />
        <Footer />
    </div>
  )
}

export default Home