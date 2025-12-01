import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/register">register</Link>
      </div>
      <Link href="/login">login</Link>
    </div>
  );
}
