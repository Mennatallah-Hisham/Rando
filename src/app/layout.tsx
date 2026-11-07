import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import logo from "../../Assets/brand/Rando Logo - Transparent.svg";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speak Rando",
  description: "Short, structured speaking practice for language learners.",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
