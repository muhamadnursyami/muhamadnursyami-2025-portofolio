import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="mt-16 relative" id="footer">
      <div className="container mx-auto px-6">
        <div
          className="
            border-t border-white/10 
            backdrop-blur-md bg-white/5 
            rounded-2xl p-8 
            flex flex-col md:flex-row 
            items-center md:items-start 
            justify-between gap-8
          "
        >
          {/* Brand / Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Muhamad Nur Syami</h3>
            <p className="text-white/50 text-sm mt-1">
              Building creative & modern web experiences.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col md:flex-row items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                target="_blank"
                className="group inline-flex items-center gap-1.5 font-medium text-white hover:text-[#5294ff] transition-colors"
              >
                {link.title}
                <FiArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom text */}
        <div className="py-6 text-center text-xs text-white/40 border-t border-white/10 mt-6">
          &copy; 2025. Muhamad Nur Syami. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhamadnursyami'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/muhamadnursyami'
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/m.nursami18/'
  }
]
