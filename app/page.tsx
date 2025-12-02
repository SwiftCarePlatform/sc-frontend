import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/sign-up">register</Link>
      </div>
      <div>
        <Link href="/login">login</Link>
      </div>
      <div>
        <Link href="/forgot-password">login</Link>
      </div>
    </div>
  );
}
