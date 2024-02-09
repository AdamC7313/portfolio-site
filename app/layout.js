import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Portfolio | Adam C.",
  description: "Portfolio for Adam Cruz, Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
