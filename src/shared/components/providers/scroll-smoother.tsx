'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
interface Props {
  children: React.ReactNode
}
export function ScrollSmootherProvider({ children }: Props) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
    })
  }, [])
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
