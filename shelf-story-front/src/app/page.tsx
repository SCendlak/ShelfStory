import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image src={'/favicon.ico'} alt={'LOGO'} width={50} height={50} />
    </main>
  )
}
