import FAQ from '../components/sections/FAQ'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import Testimonials from '../components/sections/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedProducts /> 
      <Testimonials />
      <FAQ />
    </main>
  )
}