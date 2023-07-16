import './globals.css'
import {Foldit, Inter} from 'next/font/google'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <html lang="en" className={"bg-slate-800"}>
        {/*<body className={inter.className}>*/}
        <body>
        <div className={"min-h-screen"}>
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
        </body>

        </html>
    )
}
