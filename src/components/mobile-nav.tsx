'use client';

import { useOnClickOutside } from '@/hooks/use-on-click-outside';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icons } from './icons';
import ThemeToggle from './theme-toggle';
import { buttonVariants } from './ui/button';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const pathname = usePathname();

  // Close menu when user clicks a link
  useEffect(() => {
    if (isOpen) toggleOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const closeOnCurrentPath = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  const mobileNavRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(mobileNavRef, () => setIsOpen(false));

  return (
    <div ref={mobileNavRef} className="md:hidden">
      <Menu onClick={toggleOpen} className="relative z-50 size-6" />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <div className="absolute bg-zinc-100/80 dark:bg-zinc-800/80 border-b border-zinc-700 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            <div className="flex justify-center gap-x-2">
              <a
                href="https://github.com/declangao"
                target="_blank"
                className={buttonVariants({ variant: 'ghost' })}
              >
                <Icons.Github className="size-5" />
              </a>

              <ThemeToggle />
            </div>

            <Link
              href="/experience"
              onClick={() => closeOnCurrentPath('/experience')}
              className={buttonVariants({ variant: 'ghost' })}
            >
              Experience
            </Link>

            <Link
              href="/projects"
              onClick={() => closeOnCurrentPath('/projects')}
              className={buttonVariants({ variant: 'ghost' })}
            >
              Projects
            </Link>

            <Link
              href="/about"
              onClick={() => closeOnCurrentPath('/about')}
              className={buttonVariants({ variant: 'ghost' })}
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => closeOnCurrentPath('/contact')}
              className={buttonVariants({ variant: 'ghost' })}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
