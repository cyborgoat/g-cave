export default function BlogLayout({
                                       children, // will be a page or nested layout
                                   }: {
    children: React.ReactNode
}) {
    return (
        <section className="flex justify-center mt-8">
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    )
}