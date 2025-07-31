import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "The Behaviorists | Applied Behavior Analysis (ABA Therapy)",
  description: "Specialized ABA therapy services for children with autism and related disorders. Supporting families across South Florida with evidence-based treatment.",
  keywords: "ABA therapy, Applied Behavior Analysis, autism therapy, behavioral therapy, South Florida, Miami Springs, Doral",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-rainbow-mark.avif", type: "image/avif" },
    ],
    apple: "/logo-rainbow-mark.avif",
  },
  openGraph: {
    title: "The Behaviorists | Applied Behavior Analysis (ABA Therapy)",
    description: "Specialized ABA therapy services for children with autism and related disorders.",
    type: "website",
    locale: "en_US",
    url: "https://www.the-behaviorists.com",
    siteName: "The Behaviorists",
    images: [
      {
        url: "/logo-1.avif",
        width: 1200,
        height: 630,
        alt: "The Behaviorists",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="antialiased">
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
