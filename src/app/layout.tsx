import "./globals.css";

import { Bai_Jamjuree } from "next/font/google";
const bai_Jamjuree = Bai_Jamjuree({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bai_Jamjuree.className}>{children}</body>
    </html>
  );
}
