import type { Metadata } from "next";
import "./globals.css";
import { BidukoThemeProvider } from "@/components/biduko/theme-provider";
import { Inter, Poppins } from "next/font/google";
import { LenisProvider } from "@/components/biduko/lenis-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", display: "swap", weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "BiduKo — Digital experiences that move",
  description: "BiduKo builds websites, platforms and digital experiences for brands ready to move differently.",
  keywords: ["BiduKo", "web design", "web development", "digital agency", "e-commerce", "custom platforms"],
  openGraph: { title: "BiduKo — Digital experiences that move", description: "Websites, platforms and digital experiences engineered to make people stop scrolling.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${inter.variable} ${poppins.variable}`}><BidukoThemeProvider><LenisProvider/>{children}</BidukoThemeProvider></body></html>;
}
