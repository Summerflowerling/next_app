import Image from 'next/image';
import Link from 'next/link';
import { WritingAssistant } from '@/components/writing-assistant/assitant';

export default function Home() {
  return (
    <main>
      <WritingAssistant />
    </main>
  );
}
