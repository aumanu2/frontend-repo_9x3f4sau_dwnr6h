import React, { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function classNames(...cls) {
  return cls.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkBase = 'text-sm tracking-wide uppercase transition-colors'
  const active = 'text-[#b4935c]'
  const inactive = 'text-zinc-300 hover:text-white'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-zinc-300 to-zinc-600 border border-white/20 shadow-inner" />
            <span className="text-white/90 font-semibold tracking-wider uppercase">Armour Switches</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={({isActive})=> classNames(linkBase, isActive?active:inactive)}>Home</NavLink>
            <NavLink to="/products" className={({isActive})=> classNames(linkBase, isActive?active:inactive)}>Products</NavLink>
            <NavLink to="/about" className={({isActive})=> classNames(linkBase, isActive?active:inactive)}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> classNames(linkBase, isActive?active:inactive)}>Contact</NavLink>
          </nav>

          <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="md:hidden text-zinc-200">
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-3 pt-4">
              <NavLink to="/" end className={({isActive})=> classNames(linkBase, 'px-1', isActive?active:inactive)}>Home</NavLink>
              <NavLink to="/products" className={({isActive})=> classNames(linkBase, 'px-1', isActive?active:inactive)}>Products</NavLink>
              <NavLink to="/about" className={({isActive})=> classNames(linkBase, 'px-1', isActive?active:inactive)}>About</NavLink>
              <NavLink to="/contact" className={({isActive})=> classNames(linkBase, 'px-1', isActive?active:inactive)}>Contact</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="relative bg-black text-zinc-400 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b4935c]/70 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex items-center gap-6 text-xs uppercase tracking-wide">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/products" className="hover:text-white">Products</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <p className="text-xs">Copyright © 2025 Armour Switches | Powered by Big Dreams</p>
      </div>
    </footer>
  )
}

// Subtle gold cursor dot
const CursorDot = () => {
  const dotRef = useRef(null)
  useEffect(() => {
    const move = (e) => {
      const el = dotRef.current
      if (!el) return
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div ref={dotRef} className="pointer-events-none fixed top-0 left-0 z-[9999]">
      <div className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#b4935c] mix-blend-screen shadow-[0_0_12px_2px_rgba(180,147,92,0.6)]" />
    </div>
  )
}

const Layout = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-zinc-200 selection:bg-[#b4935c]/30 selection:text-white">
      <CursorDot />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
