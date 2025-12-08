import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@fontsource/stack-sans-headline/400.css";
import "@fontsource/stack-sans-headline/500.css";
import "@fontsource/stack-sans-headline/600.css";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Behaviorists | Evidence-Based ABA Therapy in South Florida",
  description:
    "Specialized ABA therapy services for children with autism and developmental disabilities. Family-centered, evidence-based treatment in South Florida.",
  keywords:
    "ABA therapy, Applied Behavior Analysis, autism therapy, behavioral therapy, South Florida, Miami Springs, Doral, BHCOE accredited",
  icons: {
    icon: [{ url: "/logo-rainbow-mark.avif", type: "image/avif" }],
    apple: "/logo-rainbow-mark.avif",
  },
  openGraph: {
    title: "The Behaviorists | Evidence-Based ABA Therapy",
    description:
      "Specialized ABA therapy services for children with autism and developmental disabilities.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${bricolage.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
