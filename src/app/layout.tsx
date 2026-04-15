import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinRead · AI · DeFi · Space · 三大赛道一手投研",
  description:
    "聚焦 AI、DeFi、Space 三大赛道的 SEC 原典解读、管理层原话中英对照与作者投资观点。",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <Script id="finread-theme-init" strategy="beforeInteractive">
          {`(function(){try{var k='finread-theme';if(localStorage.getItem(k)==='light')document.documentElement.classList.add('light');}catch(e){}})();`}
        </Script>
        <ThemeToggle />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
