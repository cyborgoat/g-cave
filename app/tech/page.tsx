'use client'
import {useSearchParams} from "next/navigation";

async function getData(category: string, title: string) {

    const url = `https://raw.githubusercontent.com/cyborgoat/tech-reservoir/main/tech-blog/${category}/${title}.md`;


    console.log(url)
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.text()
}

export default async function Page() {

    const searchParams = useSearchParams()

    const category = searchParams.get('category') as string;
    const title = searchParams.get('title') as string;
    const data = await getData(category, title)
    return(
        <div className={'text-slate-50'}>
            this is {data}
        </div>
    )
}