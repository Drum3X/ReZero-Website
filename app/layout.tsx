//next imports
import { Roboto } from "next/font/google" 
import type { Metadata } from "next"

//css imports
import "@/css/globals.css"

const font = Roboto({ 
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"] 
})

export const metadata: Metadata = {
  title: "Re:Zero",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className = { `${font.className} bg-primary-bg sm:bg-main bg-cover bg-center bg-fixed bg-no-repeat` }>
        {children}
      </body>
    </html>
  )
}
