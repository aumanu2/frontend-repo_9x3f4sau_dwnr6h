import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export const AboutPreview = () => (
  <section className="relative py-20 bg-[#0f0f0f]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>
          Who We Are
        </h2>
        <p className="mt-6 text-zinc-300" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
          Founded in 1981, Armour Electrical Industries has become a trusted name in the world of modular switches and electrical accessories. Every product we create combines precision engineering, modern aesthetics, and lasting quality. Our expert craftsmanship and cutting-edge facilities ensure products built to perform and made to last.
        </p>
        <Link to="/about" className="mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide border border-[#b4935c] text-[#b4935c] hover:bg-[#b4935c]/10 transition">
          Learn More
        </Link>
      </motion.div>
    </div>
  </section>
)

export const ProductPreview = () => {
  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Series ${i + 1}`,
    subtitle: 'Premium Modular Switch',
    image: `https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop`,
  }))

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>
          Modern. Elegant. Reliable.
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-[#b4935c]/0 group-hover:ring-[#b4935c]/40 transition" />
              <div className="p-4">
                <p className="text-white font-medium">{p.name}</p>
                <p className="text-xs text-zinc-400">{p.subtitle}</p>
              </div>
              <div className="absolute -inset-10 bg-[#b4935c]/0 group-hover:bg-[#b4935c]/10 blur-2xl transition" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide border border-[#b4935c] text-[#b4935c] hover:bg-[#b4935c]/10 transition">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export const QualitySection = () => (
  <section className="relative py-24">
    <div className="absolute inset-0 -z-0 opacity-[0.07] bg-[radial-gradient(600px_200px_at_50%_0%,#b4935c_0%,transparent_60%)]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>
            Precision in Every Detail.
          </h3>
          <p className="mt-6 text-zinc-300" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            Products manufactured in modern facilities with the highest quality materials.
          </p>
          <p className="mt-4 text-zinc-400" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            From design to tooling, every step reflects our commitment to reliability. Our processes include rigorous testing, ensuring each component meets international standards.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative rounded-2xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYW51ZmFjdHVyaW5nfGVufDB8MHx8fDE3NjI5NjM0MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Manufacturing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  </section>
)

export const LeadershipSection = () => (
  <section className="relative py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-10">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(180,147,92,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2), transparent 40%)' }} />
        <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>
          It’s What Drives Everything We Do — Leadership.
        </h3>
        <p className="relative mt-6 text-zinc-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
          Dedicated to developing new products that improve both our customers’ lives and the spaces they live in.
        </p>
      </div>
    </div>
  </section>
)

export const FollowUs = () => (
  <section className="relative py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xl sm:text-2xl font-semibold uppercase tracking-tight" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>
          Follow Our Legacy of Innovation.
        </h4>
        <div className="flex items-center gap-4">
          {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
            <a key={i} href="#" className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
)
