import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import Chatbot from "@/components/Chatbot";
import ScrollSmootherComponent from "@/components/ScrollSmoother";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NomanuAI - AI Automation Solutions",
  description:
    "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, custom solutions, and integration services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <ScrollSmootherComponent>
            {children}
            <Chatbot />
          </ScrollSmootherComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}
