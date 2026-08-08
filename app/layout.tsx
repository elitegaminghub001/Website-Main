import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elitegaminghub.in"),

  title: {
    default: "Elite Gaming Hub | Gaming Cafe in Ahmedabad",
    template: "%s | Elite Gaming Hub",
  },

  description:
    "Elite Gaming Hub is a gaming cafe in Ahmedabad offering PS5, PS4, racing simulator, multiplayer gaming, memberships and gaming tournaments.",

  keywords: [
    "Elite Gaming Hub",
    "gaming cafe Ahmedabad",
    "PS5 gaming Ahmedabad",
    "PS4 gaming Ahmedabad",
    "gaming parlour Ahmedabad",
    "gaming cafe Juhapura",
    "PS5 cafe Ahmedabad",
    "racing simulator Ahmedabad",
    "gaming tournaments Ahmedabad",
  ],

  authors: [
    {
      name: "Elite Gaming Hub",
    },
  ],

  creator: "Elite Gaming Hub",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://elitegaminghub.in",
    siteName: "Elite Gaming Hub",
    title: "Elite Gaming Hub | Gaming Cafe in Ahmedabad",
    description:
      "Play. Compete. Experience. Visit Elite Gaming Hub for PS5, PS4, racing simulator and gaming tournaments in Ahmedabad.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Gaming Hub - Gaming Cafe in Ahmedabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elite Gaming Hub | Gaming Cafe in Ahmedabad",
    description:
      "PS5, PS4, racing simulator, multiplayer gaming and tournaments in Ahmedabad.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}