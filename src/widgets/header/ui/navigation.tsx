import { NavLinksWithScroll } from '@/shared/components'
import { cn } from '@/shared/lib/utils'
interface NavigationProps {
  className?: string
}
export function Navigation( {className}: NavigationProps) {
  return (
    <nav className={cn(className, 'flex  items-center gap-4 md:gap-8 ')}>
      <NavLinksWithScroll />
    </nav>
  )
}
