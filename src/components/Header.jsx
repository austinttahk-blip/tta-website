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
  { name: 'Simulators', link: '/simulators' },
  { name: 'Training', link: '/training' },
  { name: 'Consultation', link: '/consultation' },
  { name: 'About Us', link: '/about' },
]

export function Header({ enableColorTransition = true }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar>
      {({ visible }) => (
        <>
          <NavBody visible={visible}>
            <NavbarLogo>
              <Logo className="h-8 w-auto" />
            </NavbarLogo>
            <NavItems items={navItems} visible={visible} enableColorTransition={enableColorTransition} />
            <div className="flex items-center gap-x-4">
              <motion.a
                href="/login"
                animate={{
                  color: enableColorTransition
                    ? (visible ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)")
                    : "rgb(0, 0, 0)",
                }}
                transition={{ duration: 0.3 }}
                className="text-sm">
                Sign in
              </motion.a>
            </div>
          </NavBody>

          <MobileNav visible={visible}>
            <MobileNavHeader>
              <NavbarLogo>
                <Logo className="h-8 w-auto" />
              </NavbarLogo>
              <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} visible={visible} enableColorTransition={enableColorTransition} />
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
