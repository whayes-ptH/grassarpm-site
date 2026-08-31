import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://grassarpm.com"),
  title: { default: "Grassar Prime Management | Capital Strategy & Risk", template: "%s | Grassar Prime Management" },
  description: "Cross-border corporate finance, strategic transactions, regulatory readiness and risk architecture for ambitious enterprises.",
  openGraph: { type: "website", url: "https://grassarpm.com", siteName: "Grassar Prime Management", images: [{ url: "/hero.webp", width: 1600, height: 900 }] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
