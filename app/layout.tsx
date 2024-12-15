import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume | Thien An Nguyen",
  description: "Computer Science student portfolio showcasing projects and skills, graduating December 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50 dark:bg-gray-900 relative`}
      >
        <div className="fixed inset-0 opacity-20 dark:opacity-10 z-0">
          <picture>
            <source srcSet="/background.avif" type="image/avif" />
            <img 
              src="/background.avif" 
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        <ThemeProvider>
          <Navbar />
          <main className="pt-16 relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
