import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Shell } from "@/components/layout/Shell";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SITE_METADATA } from "@/lib/tokens";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: "%s | Gaurav Gupta",
  },
  description: SITE_METADATA.description,
  authors: [{ name: SITE_METADATA.author }],
  creator: SITE_METADATA.author,
  metadataBase: new URL("https://gauravgupta.dev"),
  keywords: [
    "Gaurav Gupta",
    "Software Development Engineer",
    "Full Stack Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Three.js",
    "Interactive Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: SITE_METADATA.locale,
    url: "https://gauravgupta.dev",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: "Gaurav Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark`}>
      <body className="min-h-screen bg-void font-sans text-neutral-body antialiased selection:bg-crimson-primary/30 selection:text-white">
        <MotionProvider>
          <Shell>{children}</Shell>
        </MotionProvider>
      </body>
    </html>
  );
}
