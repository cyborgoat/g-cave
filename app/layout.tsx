import './globals.css'
import {Foldit, Inter} from 'next/font/google'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Providers} from "./providers";

const inter = Inter({subsets: ['latin']})

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
        <html lang="en" className="dark">
        <body className="min-h-screen dark:bg-slate-800">
        <Providers>
            <Navbar/>
            {children}
        </Providers>
        </body>

        </html>
    )
}
