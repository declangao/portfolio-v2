import { cn } from '@/lib/utils';

type Props = {
  text: string;
  center?: boolean;
};

export default function Heading({ text, center }: Props) {
  return (
    <h3
      className={cn('tracking-[20px] text-2xl font-bold', {
        'text-center': center,
      })}
    >
      {text}
    </h3>
  );
}
