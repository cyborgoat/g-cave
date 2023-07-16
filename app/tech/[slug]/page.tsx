export default function TechBlogDetailPage({params}: { params: { slug: string } }) {
    return (
        <div className={"text-slate-50"}>This is the detail page for {params.slug}</div>
    )
}