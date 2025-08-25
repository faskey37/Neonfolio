import Link from "next/link";
import { Code } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Back to homepage">
      <Code className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tighter text-gradient">
        Tauqeer Khan
      </span>
    </Link>
  );
}
