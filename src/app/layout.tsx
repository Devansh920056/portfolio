import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devanshzode.com'),
  title: {
    default: "Devansh Zode | Full Stack Developer",
    template: "%s | Devansh Zode"
  },
  description: "Full Stack Developer and AIML Student passionate about building real-world applications and continuously learning modern technologies.",
  keywords: ["Devansh Zode", "Portfolio", "Full Stack Developer", "AIML", "Next.js", "React", "Web Developer"],
  openGraph: {
    title: "Devansh Zode | Full Stack Developer",
    description: "Full Stack Developer and AIML Student passionate about building real-world applications and continuously learning modern technologies.",
    url: 'https://devanshzode.com',
    siteName: 'Devansh Zode Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Devansh Zode | Full Stack Developer",
    description: "Full Stack Developer and AIML Student passionate about building real-world applications and continuously learning modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Devansh Zode",
              url: "https://devanshzode.com",
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/Devansh920056",
                "https://linkedin.com/in/devanshzode",
              ]
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col selection:bg-primary/30">
          {/* Subtle background glow effect */}
          <div className="pointer-events-none fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.15),rgba(255,255,255,0))]" />
          {children}
        </div>
      </body>
    </html>
  );
}
