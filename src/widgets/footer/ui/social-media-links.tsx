'use client'
import { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { useTheme } from 'next-themes'
import { ISocialMediaLink } from '@/shared/lib/types'
const socialMediaLinks: ISocialMediaLink[] = [
  {
    id: 'telegram',
    url: 'https://t.me/damaroo_coach',
  },
  {
    id: 'github',
    url: 'https://github.com/DamarooWork',
  },
]
export function SocialMediaLinks() {
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()
  const bgColor =
    theme === 'dark' ? 'oklch(0.969 0.016 293.756)' : ' oklch(0.606 0.25 292.717)'
  const fgColor =
    theme === 'dark' ? 'oklch(0.541 0.281 293.009)' : 'oklch(0.969 0.016 293.756)'
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return null
  }
  return (
    <ul className="flex gap-4">
      {socialMediaLinks.map((link) => (
        <li key={link.id}>
          <SocialIcon
            url={link.url}
            target={'_blank'}
            bgColor={bgColor}
            fgColor={fgColor}
            style={{ width: 40, height: 40 }}
          />
        </li>
      ))}
    </ul>
  )
}
