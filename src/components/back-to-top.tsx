'use client';

import { ArrowBigUp } from 'lucide-react';
import { Button } from './ui/button';

export default function BackToTop() {
  return (
    <Button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      variant="ghost"
      className="fixed bottom-12 right-4 group rounded-full"
      aria-label="Back to top"
    >
      <ArrowBigUp className="size-6 stroke-zinc-300/50 group-hover:fill-zinc-500 dark:group-hover:fill-zinc-100" />

      <span className="sr-only">Click to go back to top</span>
    </Button>
  );
}
