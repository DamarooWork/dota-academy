'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef } from 'react'
gsap.registerPlugin(useGSAP, ScrollToPlugin)

interface IHashLink {
  hash: string
  title: string
}
const linksArr: IHashLink[] = [
  {
    hash: '#prices',
    title: 'Цены',
  },
  {
    hash: '#rewiews',
    title: 'Отзывы',
  },
]
export function Navigation() {
  const refLinks = useRef<HTMLButtonElement[]>([])
  function handleLinkClick(link: string) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: link, offsetY: 80 },
      ease: 'power2.inOut',
    })
  }
  return (
    <nav className="flex flex-1 items-center gap-8 mr-4">
      {linksArr.map((link, i) => {
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
    </nav>
  )
}
