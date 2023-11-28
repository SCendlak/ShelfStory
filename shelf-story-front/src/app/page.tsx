import BasicThree from "@/app/Earth/page";
import Head from "next/head";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around ">
        <Head>
            <title>Next.js with Three.js</title>
        </Head>

        <div className="absolute z-10 w-full">
            <h1 className="text-4xl text-white">There will be content here</h1>
            <p className="text-1xl text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum vehicula nulla, ut malesuada urna cursus eget. Nullam interdum sed turpis ac blandit. Donec pharetra erat lobortis quam imperdiet porta. Suspendisse rhoncus a diam ut dictum. Donec ac venenatis dui. Etiam sit amet accumsan neque, eu vehicula urna. Nulla molestie aliquam libero, sed iaculis lacus. Nunc id ex id neque rhoncus congue sed a sem. In quis ornare purus.</p>
        </div>

        <div className="absolute top-0 left-0 w-full h-screen">
            <BasicThree />
        </div>
    </main>
  )
}
