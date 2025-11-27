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
  { name: 'Projects', link: '/projects' },
  { name: 'Simulators', link: '/simulators' },
  { name: 'Education', link: '/education' },
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
              <Logo className="h-8 w-auto" visible={visible} enableColorTransition={enableColorTransition} />
            </NavbarLogo>
            <NavItems items={navItems} visible={visible} enableColorTransition={enableColorTransition} />
          </NavBody>

          <MobileNav visible={visible}>
            <MobileNavHeader>
              <NavbarLogo>
                <Logo className="h-8 w-auto" visible={visible} enableColorTransition={enableColorTransition} />
              </NavbarLogo>
              <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} visible={visible} enableColorTransition={enableColorTransition} />
            </MobileNavHeader>
            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-600">
                  {item.name}
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </>
      )}
    </Navbar>
  )
}
