import type { Metadata } from "next";

import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={font.className}
      >
        <ThemeProvider
          enableColorScheme={true}
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
