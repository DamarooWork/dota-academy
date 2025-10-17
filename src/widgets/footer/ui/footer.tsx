import { TooltipWidget } from '@/widgets'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/components'
interface Props {
  className?: string
}
export function Footer({ className }: Props) {
  return (
    <footer
      className={cn(
        className,
        'flex items-center justify-between h-40'
      )}
    >
      <Container className="flex items-center justify-between">
        <TooltipWidget label="Это подсказка" side="top" align="start">
          <h2 className="text-4xl font-bold">Footer</h2>
        </TooltipWidget>
      </Container>
    </footer>
  )
}
