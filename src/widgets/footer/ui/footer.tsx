import { TooltipWidget } from '@/widgets'
import { cn } from '@/shared/lib/utils'
interface Props {
  className?: string
}
export function Footer({ className }: Props) {
  return (
    <footer
      className={cn(
        className,
        'flex items-center justify-between h-40 bg-gray-500'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <TooltipWidget label="Это подсказка" side="top" align="start">
          <h2 className="text-4xl font-bold">Footer</h2>
        </TooltipWidget>
      </div>
    </footer>
  )
}
