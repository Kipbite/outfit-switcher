import Link from "next/link";

export default function Home() {
  return (
    <main>
      Go to <Link href='panel'>/panel</Link> or <Link href='config'>/config</Link>
    </main>
  );
}
