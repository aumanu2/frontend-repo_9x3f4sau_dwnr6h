import React from 'react'

const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>About</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-zinc-300" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
              Established in 1981 in Mumbai, Armour Electrical Industries has grown into a trusted manufacturer of luxury modular switches, sockets, and lighting accessories. Our mission is to blend precision engineering with modern design to create products that elevate spaces and endure daily use.
            </p>
            <p className="mt-6 text-zinc-400" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
              Our manufacturing process leverages state-of-the-art machinery and rigorous quality control. From material selection to final assembly, each step ensures unmatched reliability and an impeccable finish.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYWN0b3J5fGVufDB8MHx8fDE3NjI5NjM0MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Factory" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>Leadership Message</h2>
          <p className="mt-6 text-zinc-300 max-w-3xl" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
            We believe in building products that improve our customers’ lives and the spaces they live in. Innovation, responsibility, and relentless attention to detail drive everything we do.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
