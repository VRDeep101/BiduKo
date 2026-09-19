"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface BidukoThemeProviderProps { children: ReactNode }

export function BidukoThemeProvider({ children }: BidukoThemeProviderProps) {
  return <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>{children}</ThemeProvider>;
}
