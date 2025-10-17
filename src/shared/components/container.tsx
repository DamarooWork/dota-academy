import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-[1536px] px-4 2xl:px-10 w-full h-full',
        className
      )}
    >
      {children}
    </div>
  )
}
