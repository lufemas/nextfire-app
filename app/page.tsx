import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link
        prefetch={true}
        href="/lufemas"
      > 
        lufemas
      </Link>
    </main>
  )
}
