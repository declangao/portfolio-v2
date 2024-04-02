import EmailTemplate from '@/components/email-template';
import { MessageSchema } from '@/schemas';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const data = MessageSchema.parse(body);

    await resend.emails.send({
      from: 'My Portfolio Site <onboarding@resend.dev>',
      to: [process.env.MY_EMAIL!],
      subject: `Message from ${data.name}`,
      react: EmailTemplate(data),
    });

    return NextResponse.json({ message: 'Message sent' }, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid request data' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Something went wrong...' },
      { status: 500 }
    );
  }
};
