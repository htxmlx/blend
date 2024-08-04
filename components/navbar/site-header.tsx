import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { Logo } from './logo'
import { ModeToggle } from './mode-toggle'
import { HomeNav } from './home-nav'
import { MobileNav } from './mobile-nav'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between p-3'>
      <HomeNav />
      <MobileNav />

      <nav className='flex items-center space-x-2'>
        <Link
          href='/help'
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
        >
          Login
        </Link>

        <Link
          href='/help'
          className={cn(
            buttonVariants({ variant: 'gooeyLeft', size: 'lg' }),
            'hidden md:flex'
          )}
        >
          Create Account
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
