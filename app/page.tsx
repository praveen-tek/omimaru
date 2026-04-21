import { Inter, Waiting_for_the_Sunrise } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const sunrise = Waiting_for_the_Sunrise({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={`relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#050505] text-[#EEEEEE] ${inter.className}`}>
      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-15 mix-blend-overlay">
        <svg className="absolute inset-0 h-full w-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.4 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Centerpiece Content */}
      <div className="z-10 flex flex-col items-center justify-center">
        {/* OMIMARU Logo with subtle pulse/flicker */}
        <div className="animate-eerie-pulse relative mb-12 flex items-center justify-center">
          <Image src="/logo.svg" alt="OMIMARU Logo" width={200} height={200} />
        </div>

        {/* Text Area */}
        <div className="flex flex-col items-center gap-2">
          <p className={`${sunrise.className} text-xl md:text-2xl text-[#EEEEEE] opacity-70 mt-2`}>
            The shift begins soon.
          </p>
        </div>
      </div>

      {/* Contact */}
      <a
        href="mailto:hello@omimaru.studio"
        className={` ${sunrise.className} absolute bottom-8 z-10 text-xs md:text-sm font-light tracking-widest text-[#EEEEEE] opacity-50 transition-opacity hover:opacity-100 hover:text-[#D72323] duration-500`}
      >
        hello@omimaru.studio
      </a>
    </main>
  );
}
