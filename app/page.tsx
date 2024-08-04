import { SiteHeader } from '@/components/navbar/site-header'
import { Input } from '@/components/ui/input'
import { Pattern } from '@/components/ui/pattern'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'

export default function page() {
  return (
    <>
      <SiteHeader />
      <section className='space-y-5 py-20 relative mx-auto max-w-screen-lg px-4 md:px-0'>
        <Pattern variant='checkered' />
        <h1 className='font-semibold text-5xl'>
          Welcome to Plotwist:
          <br /> Your cinema platform
        </h1>
        <p className='text-muted-foreground text-2xl '>
          Get accurate and relevant summaries for your book in just a few
          clicks.
        </p>
        <div
          className={cn(
            'flex h-14 px-3 items-center rounded-md border border-input pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2'
          )}
        >
          <SearchIcon className='size-10' />
          <input
            type='search'
            className='text-2xl h-12 overflow-hidden w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-background focus-visible:ring-0'
          />
        </div>
      </section>
    </>
  )
}
