'use client'
import { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Curtain() {
  const curtain = useRef<HTMLDivElement>(null)
  const spanText = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.to(spanText.current, {
        delay: 0.2,
        yPercent: -150,
        duration: 0.4,
        ease: 'none',
      })

      gsap.to(spanText.current, {
        delay: 1.2,
        duration: 0.4,
        opacity: 0,
      })
      gsap.to(curtain.current, {
        delay: 1.5,
        yPercent: -100,
        duration: 0.3,
        ease: 'none',
      })
    },
    { scope: curtain }
  )
  return (
    <div
      ref={curtain}
      className="fixed top-0 left-0 w-full h-full bg-background z-100 flex justify-center items-center text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-primary"
    >
      <div className="overflow-hidden h-16 2xl:h-28 text-center ">
        <span
          ref={spanText}
          className="block translate-y-[150%]  will-change-transform"
        >
          Damaroo Dota Academy
        </span>
      </div>
    </div>
  )
}
