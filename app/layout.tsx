import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StairsTransitionProvider } from "@/components/transitions/StairsProvider";
import { StairsOverlay } from "@/components/transitions/StairsOverlay";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.Nur Syami | Portofolio",
  description: "Portofolio M.Nur Syami",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
        {/* Provider + global overlay */}
        <StairsTransitionProvider>
          <StairsOverlay />
          {children}
        </StairsTransitionProvider>
      </body>
    </html>
  );
}