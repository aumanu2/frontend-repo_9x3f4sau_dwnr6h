import React from 'react'

const Contact = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight" style={{ fontFamily: 'Clash Display, Satoshi, Inter, sans-serif' }}>Contact</h1>
        <p className="mt-4 text-zinc-400" style={{ fontFamily: 'Inter, sans-serif' }}>We’d love to hear from you. Share your requirements and our team will get back to you.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Name</label>
              <input required type="text" className="w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 outline-none focus:border-[#b4935c] text-white" />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Email</label>
              <input required type="email" className="w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 outline-none focus:border-[#b4935c] text-white" />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Message</label>
              <textarea rows="5" className="w-full rounded-xl bg-zinc-900/60 border border-white/10 px-4 py-3 outline-none focus:border-[#b4935c] text-white" />
            </div>
            <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-white text-black hover:scale-[1.02] transition-transform">Send Message</button>
          </form>

          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-zinc-950 to-zinc-900">
            <h3 className="text-xl font-semibold">Company Info</h3>
            <p className="mt-3 text-zinc-400">Armour Electrical Industries (Armour Switches)</p>
            <p className="text-zinc-400">Established 1981 — Mumbai, India</p>
            <p className="mt-4 text-zinc-400">Email: info@armourswitches.com</p>
            <p className="text-zinc-400">Phone: +91 22 1234 5678</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
