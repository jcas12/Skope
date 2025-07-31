import type { Metadata } from "next"
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skopedev.com"),
  title: "Skope – Powerful Websites for Personal Brands",
  description:
    "Transform your vision into a stunning digital presence that converts visitors into customers. Professional web design and development services.",
  keywords:
    "web design, web development, personal branding, conversion optimization, Next.js, TypeScript",
  authors: [{ name: "Skope", url: "https://www.skopedev.com" }],
  creator: "Skope",
  openGraph: {
    title: "Skope – Powerful Websites for Personal Brands",
    description:
      "Transform your vision into a stunning digital presence that converts visitors into customers.",
    url: "https://www.skopedev.com",
    siteName: "Skope",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/skope-logo.png",
        width: 1200,
        height: 630,
        alt: "Skope Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skope – Powerful Websites for Personal Brands",
    description:
      "Transform your vision into a stunning digital presence that converts visitors into customers.",
    creator: "@skope",
    images: ["/skope-logo.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.skopedev.com" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}