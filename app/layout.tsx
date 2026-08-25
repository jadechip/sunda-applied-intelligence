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
  metadataBase: new URL("https://sunda-applied-intelligence.jadechip.chatgpt.site"),
  title: "GradNorm — Expert data for real-world AI",
  description:
    "GradNorm connects frontier AI teams with vetted experts to create high-quality training data, evaluations, and real-world environments.",
  openGraph: {
    title: "GradNorm — Expert data for real-world AI",
    description: "Vetted experts, high-quality training data, and real-world evaluations for frontier AI teams.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GradNorm — Expert data for real-world AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GradNorm — Expert data for real-world AI",
    description: "Vetted experts, high-quality training data, and real-world evaluations for frontier AI teams.",
    images: ["/og.png"],
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
            __html: `try{if(localStorage.getItem("gradnorm-theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`,
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
