// our-domanain.com/news

import Link from "next/link";

export default function Newspage() {
    return (
        <>
            <h1>The News page</h1>
            <ul>
                <li><Link href='/news/nextjs-is-a-great-framework'>NextJS is a great framework</Link></li>
                <li>Something else</li>
            </ul>
        </>
    )
}