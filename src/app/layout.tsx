import type { Metadata } from "next";
import { Geist, Geist_Mono, Teko } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heimlab",
  description:
    "A home server powered by Docker that hosts a personal cloud ecosystem — running services like file storage, media streaming, password management, and monitoring tools — all containerized for easy management and scalability. It turns your local machine into a private, self-hosted cloud where you control your data, automate your workflows, and experiment with modern infrastructure technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${teko.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
