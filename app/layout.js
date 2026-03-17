import { Aldrich, Rosarivo } from "next/font/google";
import "./globals.css";

const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const rosarivo = Rosarivo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Kousthubha L Rao",
  description: "1BM23CB026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aldrich.variable} ${rosarivo.variable}`}>
        {children}
      </body>
    </html>
  );
}