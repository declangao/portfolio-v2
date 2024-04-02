type Props = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: Props) {
  return (
    <div>
      <h1>Message Received</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Subject: {subject}</p>
      <p>Message: {message}</p>
    </div>
  );
}
