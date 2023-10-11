import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <title>Google Clone Next js 13</title>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
