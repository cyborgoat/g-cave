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
            <div className={"min-h-screen px-8"}>
                <Navbar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </Providers>
        </body>

        </html>
    )
}
