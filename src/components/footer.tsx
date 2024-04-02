import { Icons } from './icons';

export default function Footer() {
  return (
    <div className="container border-t h-12 flex justify-between items-center">
      <div className="text-sm">
        <span className="text-muted-foreground">
          © {new Date().getFullYear()} Copyright:{' '}
        </span>
        <span className="animate-pulse">Declan Gao</span>
      </div>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/declangao/" target="_blank">
          <Icons.LinkedIn className="size-6" />
        </a>
        <a href="https://github.com/declangao" target="_blank">
          <Icons.Github className="size-6" />
        </a>
      </div>
    </div>
  );
}
