import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunda — Evaluation infrastructure for computer-use agents",
  description:
    "Sunda builds realistic software environments and expert-authored evaluation data for teams advancing computer-use agents.",
  openGraph: {
    title: "Sunda — Intelligence for work beyond the API",
    description: "Realistic software environments and expert-authored evaluation data for computer-use agents.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sunda — Intelligence for work beyond the API",
    description: "Realistic software environments and expert-authored evaluation data for computer-use agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("sunda-theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
