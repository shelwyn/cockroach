import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cockroach — Older than the dinosaurs",
  description:
    "A field guide to Blattodea: 4,600 species, 320 million years of evolutionary practice, and one very misunderstood insect.",
  openGraph: {
    title: "Cockroach — Older than the dinosaurs",
    description:
      "A field guide to Blattodea: 4,600 species, 320 million years of practice, and one very misunderstood insect.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cockroach — older than the dinosaurs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cockroach — Older than the dinosaurs",
    description:
      "A field guide to Blattodea: 4,600 species, 320 million years, and one very misunderstood insect.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="grain min-h-full bg-void text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
