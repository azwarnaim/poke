import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/slider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <Slider />
    </div>
  );
}
