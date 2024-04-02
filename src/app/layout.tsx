import BackToTop from '@/components/back-to-top';
import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Declan Gao | Full-stack developer',
  description: 'Declan Gao is a full-stack developer based in Toronto, Canada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans antialiased flex flex-col overflow-x-hidden',
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <div className="container flex-grow">{children}</div>

          <Footer />

          <BackToTop />
          <Toaster />
        </ThemeProvider>

        <GoogleAnalytics />
      </body>
    </html>
  );
}
