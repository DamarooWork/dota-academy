import { TooltipWidget } from '@/widgets'
import { cn } from '@/shared/lib/utils'
import { Container, NavLinksWithScroll } from '@/shared/components'
import { Button } from '@/shared/ui'
import Link from 'next/link'
import { SocialMediaLinks } from './social-media-links'
interface Props {
  className?: string
}
export function Footer({ className }: Props) {
  return (
    <footer
      className={cn(
        className,
        'flex items-center justify-between min-h-40 mt-16 bg-background/50 dark:bg-background/80 border-border border-t-1 py-4'
      )}
    >
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-bold">ОСТАЛИСЬ ВОПРОСЫ?</p>
          <p className="text-5xl font-bold">ЗАДАЙ ИХ В МНЕ TG!</p>
          <Button
            size={`lg`}
            className="self-start mt-4 text-4xl rounded-3xl font-bold py-8 hover:scale-102 active:scale-98 transition-all duration-300 will-change-transform"
          >
            <Link href={`https://t.me/damaroo_coach`} target="_blank">
              СПРОСИТЬ!
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl italic font-semibold">Damaroo Dota Academy</h3>
          <ul className="flex gap-4 text-2xl ">
            <NavLinksWithScroll/>
          </ul>
          <SocialMediaLinks />
        </div>
      </Container>
    </footer>
  )
}
