'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Logo } from '@/components/Logo'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from '@/components/ui/resizable-navbar'

const navItems = [
  { name: 'Courses', link: '#features' },
  { name: 'Training', link: '#testimonials' },
  { name: 'About', link: '#about' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar>
      {({ visible }) => (
        <>
          <NavBody visible={visible}>
            <NavbarLogo>
              <Logo className="h-8 w-auto" />
            </NavbarLogo>
            <NavItems items={navItems} visible={visible} />
            <div className="flex items-center gap-x-4">
              <motion.a
                href="/login"
                animate={{
                  color: visible ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
                }}
                transition={{ duration: 0.3 }}
                className="text-sm hover:opacity-80">
                Sign in
              </motion.a>
            </div>
          </NavBody>

          <MobileNav visible={visible}>
            <MobileNavHeader>
              <NavbarLogo>
                <Logo className="h-8 w-auto" />
              </NavbarLogo>
              <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} visible={visible} />
            </MobileNavHeader>
            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-600 dark:text-neutral-300">
                  {item.name}
                </a>
              ))}
              <hr className="my-2 border-neutral-200 dark:border-neutral-800" />
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-neutral-600 dark:text-neutral-300">
                Sign in
              </a>
            </MobileNavMenu>
          </MobileNav>
        </>
      )}
    </Navbar>
  )
}
