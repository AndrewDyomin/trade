import { IBM_Plex_Sans } from "next/font/google";
import logo from "@/app/public/logo-black.png"
import "./globals.css";

const ibm = IBM_Plex_Sans({
  variable: '--ibm-plex-sans',
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap"
})

export const metadata = {
  title: "TradeBlade",
  description: "Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме",
  openGraph: {
    title: "TradeBlade",
    description: "Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме",
    url: "https://trade-jet.vercel.app/",
  },
  images: [
    {
      url: {logo},
      width: 180,
      height: 100,
      alt: "Logo"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm.variable}>
        {children}
      </body>
    </html>
  );
}
