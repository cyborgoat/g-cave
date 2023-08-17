'use client'

import { useSearchParams } from 'next/navigation'
export default function TechBlogDetailPage() {
    const searchParams = useSearchParams()

    const title = searchParams.get('title')
    return (
        <div className={"text-slate-50"}>This is the detail page for {title}</div>
    )
}