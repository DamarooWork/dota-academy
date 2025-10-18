'use client'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRef } from 'react'
import { IHashLink } from '../lib/types'
gsap.registerPlugin(useGSAP, ScrollToPlugin)


const linksArr: IHashLink[] = [
  {
    hash: '#prices',
    title: 'Тарифы',
  },
  {
    hash: '#rewiews',
    title: 'Отзывы',
  },
]
export  function  NavLinksWithScroll(){
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
    </>
  )
}