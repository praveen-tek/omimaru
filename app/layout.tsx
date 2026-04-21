import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMIMARU",
  description: "Boutique indie game development laboratory. The Architecture of Tension.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
