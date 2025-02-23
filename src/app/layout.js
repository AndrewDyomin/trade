import { Inter, Jura, IBM_Plex_Sans } from "next/font/google";
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
