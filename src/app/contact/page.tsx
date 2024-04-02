'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessagePayload, MessageSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessagePayload>({
    resolver: zodResolver(MessageSchema),
  });

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const errs = Object.entries(errors);
    if (errs.length) {
      for (const [_key, value] of errs) {
        toast.error('Please check your input', {
          description: value.message,
        });
      }
    }
  }, [errors]);

  const onSubmit = async (payload: MessagePayload) => {
    setIsPending(true);

    const res = await axios.post('/api/contact', payload);
    setIsPending(false);

    if (res.status === 201) return toast.success('Message sent!');

    toast.error('Something went wrong...', {
      description: 'Please try again later.',
    });
  };

  return (
    <div className="flex flex-col justify-center items-center my-12">
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl text-center mb-8"
      >
        Get in Touch
      </motion.h1>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full md:w-fit"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full mx-auto"
        >
          <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4">
            <Input {...register('name')} placeholder="Name" />

            <Input {...register('email')} placeholder="Email" type="email" />
          </div>

          <Input {...register('subject')} placeholder="Subject" />

          <Textarea {...register('message')} placeholder="Message" rows={5} />

          <Button disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              'Send'
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
