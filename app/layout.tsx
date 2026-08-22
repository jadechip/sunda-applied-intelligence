import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title: "Sunda — Applied intelligence for Southeast Asia",
    description:
      "Sunda works with ambitious operators to turn complex, high-friction workflows into systems that learn, adapt, and scale.",
    openGraph: {
      title: "Sunda — Applied intelligence for Southeast Asia",
      description: "Intelligence for the work that moves Southeast Asia.",
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909, alt: "Sunda — Intelligence for the work that moves Southeast Asia." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sunda — Applied intelligence for Southeast Asia",
      description: "Intelligence for the work that moves Southeast Asia.",
      images: [socialImage],
    },
  };
}

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
