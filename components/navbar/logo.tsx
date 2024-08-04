import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Icons } from '../common/icons'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

export function Logo() {
  return (
    <Link
      href='/'
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'flex items-center font-semibold gap-1'
      )}
    >
      <Icons.logo />
      {siteConfig.name}
    </Link>
  )
}
