import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DiceDegen',
  description: 'Coming Soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="\logodice.png" type="image/png"></link>
      </head>
      <body className="font-[Inter,sans-serif]">{children}</body>
    </html>
  )
}