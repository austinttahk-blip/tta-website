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
  { 
    name: 'Projects', 
    link: '/projects',
    subItems: [
      { name: 'Simulator Projects', link: '/projects/simulator-projects' },
      { name: 'LAE Projects', link: '/projects/lae-projects' },
    ]
  },
  { 
    name: 'Simulators', 
    link: '/simulators',
    subItems: [
      { name: 'Standard Solutions', link: '/simulators/standard-solutions' },
      { name: 'Custom Solutions', link: '/simulators/custom-solutions' },
    ]
  },
  { 
    name: 'Education', 
    link: '/education',
    subItems: [
      { name: 'Youth Aviation', link: '/education/youth-aviation' },
      { name: 'Aviation English', link: '/education/aviation-english' },
      { name: 'Workshop', link: '/education/workshop' },
      { name: 'Flight Training', link: '/education/flight-training' },
      { name: 'Simulator Training', link: '/education/flight-simulator-training' },
      { name: 'Professional Training', link: '/education/professional-training' },
    ]
  },
  { name: 'About Us', link: '/about' },
]

export function Header({ enableColorTransition = true }) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleExpanded = (idx) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx)
    } else {
      newExpanded.add(idx)
    }
    setExpandedItems(newExpanded)
  }

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
                <div key={idx} className="w-full">
                  {item.subItems && item.subItems.length > 0 ? (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <a
                          href={item.link}
                          onClick={() => setIsOpen(false)}
                          className="text-neutral-600 flex-1">
                          {item.name}
                        </a>
                        <button
                          onClick={() => toggleExpanded(idx)}
                          className="text-neutral-400 p-2 -mr-2"
                          aria-label={expandedItems.has(idx) ? 'Collapse menu' : 'Expand menu'}>
                          <svg
                            className={`w-5 h-5 transition-transform ${expandedItems.has(idx) ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {expandedItems.has(idx) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem, subIdx) => (
                            <a
                              key={subIdx}
                              href={subItem.link}
                              onClick={() => setIsOpen(false)}
                              className="block text-neutral-500 text-sm py-1">
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="text-neutral-600 block">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </>
      )}
    </Navbar>
  )
}
