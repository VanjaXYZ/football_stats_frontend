import FS_WHITE_LOGO from "@/assets/logo bijela.png";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import TopNavMenu from "./(navigation)/TopNavMenu";
import "./globals.css";
import Footer from "./(pages)/(shared)/Footer";

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
        <div className="bg-black/70 h-16 px-6 flex items-center py-10 fixed top-0 w-full z-10">
          <Image src={FS_WHITE_LOGO} alt="fs_logo" width={50} height={50} />
          <TopNavMenu />
        </div>
        {children}
        <div className="sticky bottom-0">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
