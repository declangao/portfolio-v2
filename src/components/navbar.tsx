import Link from 'next/link';
import { Icons } from './icons';
import MobileNav from './mobile-nav';
import ThemeToggle from './theme-toggle';
import { buttonVariants } from './ui/button';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 h-16 backdrop-blur-lg shadow-md dark:shadow-zinc-800">
      <nav className="container h-full flex justify-between items-center">
        <div className="h-14">
          <Link href="/">
            <Icons.Logo className="fill-black dark:fill-zinc-100 h-14" />
          </Link>
        </div>

        <MobileNav />

        <div className="hidden md:flex items-center gap-x-2">
          <Link
            href="/experience"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Projects
          </Link>
          <Link href="/about" className={buttonVariants({ variant: 'ghost' })}>
            About
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: 'ghost' })}
          >
            Contact
          </Link>
          <a
            href="https://github.com/declangao"
            target="_blank"
            className={buttonVariants({ variant: 'ghost' })}
          >
            <Icons.Github className="size-5" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
