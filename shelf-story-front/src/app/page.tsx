import Image from 'next/image'
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <Image src={'/favicon.ico'} alt={'LOGO'} width={50} height={50} />

        <Link href="/test">TEST LINK</Link>
    </main>
  )
}
