'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef } from 'react'
import { hashLinks } from '@/shared/lib/data'
gsap.registerPlugin(useGSAP, ScrollToPlugin)

export function NavLinksWithScroll() {
  const refLinks = useRef<HTMLButtonElement[]>([])
  function handleLinkClick(link: string) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: link, offsetY: 100 },
      ease: 'power2.inOut',
    })
  }
  return (
    <>
      {hashLinks.map((link, i) => {
        return (
          <a key={link.hash}>
            <button
              ref={(node) => {
                if (node) {
                  refLinks.current[i] = node
                }
              }}
              onClick={() => handleLinkClick(link.hash)}
              className="cursor-pointer"
            >
              {link.title}
            </button>
          </a>
        )
      })}
    </>
  )
}
