import React from 'react'
import { motion } from 'framer-motion'

const Products = () => {
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Armour Series ${i + 1}`,
    desc: 'Luxury modular switch with premium finish',
    image: `https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop`,
  }))

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>Products</h1>
        <p className="mt-4 text-zinc-400 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>Explore our range of modern, elegant, and reliable modular switches and accessories.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[#b4935c]/0 group-hover:ring-[#b4935c]/40 transition" />
              <div className="p-5">
                <p className="text-white font-medium">{p.name}</p>
                <p className="text-sm text-zinc-400">{p.desc}</p>
              </div>
              <div className="absolute -inset-10 bg-[#b4935c]/0 group-hover:bg-[#b4935c]/10 blur-2xl transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
