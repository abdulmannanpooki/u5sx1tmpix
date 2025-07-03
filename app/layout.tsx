import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Pricing',
  description: 'Beautiful pricing page built with Next.js and shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, 'bg-background text-foreground')}>
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
            <Link href="/" className="text-xl font-bold hover:underline">
              <span className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                NextPricing
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Pricing
              </Link>
              <Button asChild size="sm" variant="default">
                <Link href="/pricing">Get Started</Link>
              </Button>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}
