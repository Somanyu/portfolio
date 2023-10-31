import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Portfolio | Somanyu',
  description: 'Discover my Next.js portfolio showcasing web development and design projects. I specialize in Next.js, Sanity.io, Tailwind CSS, and TypeScript. Explore my work and get in touch for collaboration opportunities.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed right-6 top-6 group">
            <ModeToggle />
          </div>
          <div className="fixed left-6 top-6 group">
            <Link href={'/'}>
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/lorelei/svg?seed=somanyu&eyes=variant02&hair=variant07&head=variant04&mouth=happy05&nose=variant01" />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
