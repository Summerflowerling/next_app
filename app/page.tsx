import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello first next app</h1>
      <Link href='/user'>User Page</Link>
    </main>
  );
}
