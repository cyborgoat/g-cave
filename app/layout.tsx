import './globals.css'
import {Foldit, Inter} from 'next/font/google'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Providers} from "./providers";

// const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'G-Cave',
    description: 'Junxiao Guo\'s Personal Website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={"light bg-zinc-50"}>
        {/*<body className={inter.className}>*/}
        <body>
        <Providers>
            <Navbar/>
            <div className="flex justify-center min-h-screen w-screen px-8">
                <div className="flex w-4/5 mt-8">
                    {children}
                </div>
            </div>
            <Footer/>
        </Providers>
        </body>

        </html>
    )
}
