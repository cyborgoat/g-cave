export default function BlogLayout({
                                       children, // will be a page or nested layout
                                   }: {
    children: React.ReactNode
}) {
    return (
        <section className="flex my-8 lg:my-16 min-h-screen w-screen justify-center">
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
        </section>
    )
}