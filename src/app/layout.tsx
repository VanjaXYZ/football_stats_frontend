import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import TopNavMenu from "./(navigation)/TopNavMenu";
import FS_WHITE_LOGO from "@/assets/logo bijela.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Football Stats",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="bg-black/90 h-16 px-6 flex items-center py-10">
          <Image src={FS_WHITE_LOGO} alt="fs_logo" width={50} height={50} />
          <TopNavMenu />
        </div>
        {children}
      </body>
    </html>
  );
}
