import React from 'react'
import Hero from '../components/Hero'
import { AboutPreview, ProductPreview, QualitySection, LeadershipSection, FollowUs } from '../components/Sections'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductPreview />
      <QualitySection />
      <LeadershipSection />
      <FollowUs />
    </>
  )
}

export default Home
