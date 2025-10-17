import { ThemeSelector } from '@/widgets'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/components'
interface Props {
  className?: string
}
export function Header({ className }: Props) {
  return (
    <header
      className={cn(
        className,
        'sticky inset-x-0 top-0 z-50 flex items-center justify-between  bg-background/95'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-full py-2">
          <ThemeSelector />
        </div>
      </Container>
    </header>
  )
}
