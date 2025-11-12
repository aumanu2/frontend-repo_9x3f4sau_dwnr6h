import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

const shimmer = {
  initial: { backgroundPosition: '200% 0' },
  animate: { backgroundPosition: '-200% 0', transition: { duration: 3, repeat: Infinity, ease: 'linear' } },
}

const Hero = () => {
  return (
    <section className="relative h-[92vh] sm:h-[94vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0f0f0f] pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-semibold uppercase tracking-tight"
            style={{
              fontFamily: "Clash Display, Satoshi, Inter, sans-serif",
            }}
          >
            <motion.span
              variants={shimmer}
              initial="initial"
              animate="animate"
              className="block text-balance leading-[0.95]"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                background: 'linear-gradient(to right, #ffffff, #b4935c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '400% 100%',
              }}
            >
              Keep Shining Beautiful One,
              <br className="hidden sm:block" />
              The World Needs Your Light.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-zinc-300 max-w-2xl"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
          >
            Premium Modular Switches & Accessories Since 1981.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-white text-black hover:scale-[1.02] transition-transform">
              Explore Products
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide border border-[#b4935c] text-[#b4935c] hover:bg-[#b4935c]/10 hover:scale-[1.02] transition">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center z-10">
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-full border border-white/20 p-2 text-white/90"
        >
          <ChevronDown />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
