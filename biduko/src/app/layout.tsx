import type { Metadata } from "next";
import "./globals.css";
import { BidukoThemeProvider } from "@/components/biduko/theme-provider";
import { LenisProvider } from "@/components/biduko/lenis-provider";

export const metadata: Metadata = {
  title: "BiduKo — Digital experiences that move",
  description: "BiduKo builds websites, platforms and digital experiences for brands ready to move differently.",
  keywords: ["BiduKo", "web design", "web development", "digital agency", "e-commerce", "custom platforms"],
  openGraph: { title: "BiduKo — Digital experiences that move", description: "Websites, platforms and digital experiences engineered to make people stop scrolling.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><BidukoThemeProvider><LenisProvider/>{children}</BidukoThemeProvider></body></html>;
}
