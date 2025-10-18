import { NavLinksWithScroll } from '@/shared/components'

export function Navigation() {
  return (
    <nav className="flex flex-1 items-center gap-8 mr-4 motion-preset-focus motion-delay-300">
      <NavLinksWithScroll />
    </nav>
  )
}
