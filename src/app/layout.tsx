import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Javier · Junior Front-end Developer",
  description:
    "Portfolio de Javier (Junior Front-end): Angular, React, Next.js, TypeScript. Proyectos reales y despliegues en Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
       <html lang="es" data-theme="winter" suppressHydrationWarning>
      <body className={`${manrope.variable} ${jetbrains.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
