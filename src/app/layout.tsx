import type { Metadata, ResolvingMetadata } from "next";
import { Oswald, Grand_Hotel, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import { Header } from "@/components/Header";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { Footer } from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["600", "700"],
  display: "swap",
});
const src_sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-src-sans",
  weight: ["400", "700"],
  display: "swap",
});
const grand_hotel = Grand_Hotel({
  subsets: ["latin"],
  variable: "--font-grand-hotel",
  weight: ["400"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Luvianka",
    description: settings.data.meta_description || "",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MobileMenuProvider>
        <body
          className={`${oswald.variable} ${src_sans.variable} ${grand_hotel.variable}`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </MobileMenuProvider>
    </html>
  );
}
