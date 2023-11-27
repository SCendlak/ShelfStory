'use client'

import Link from "next/link";
import useApi from "@/app/axios";

export default function Test() {
    const api = useApi()
    function sendToServer() {
        console.log('click')
        api.get('/badTest').then(res => console.log(res))
    }

    return (
        <main className="flex min-h-screen flex-col items-center ">
            <Link href="/">TEST LINK</Link>
            <button onClick={()=>sendToServer()}>CLICK</button>
        </main>
    )
}
