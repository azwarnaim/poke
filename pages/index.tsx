import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Slider from "@/components/slider";



export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <Slider />
    </div>
  );
}
