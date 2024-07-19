import Link from "next/link";
import Image from "next/image";
//
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logos from "@/components/logos";
import DynamicText from "@/components/dynamic-text";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white"
      style={{ backgroundImage: "url(/images/Forge_scenery.png)" }}
    >
      <nav className="p-4">
        <div className="flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold">
            <Image
              src="/images/logo.png"
              alt="Tavern Forge Logo"
              sizes="/images/logo@2x.png 2x"
              width={132}
              height={52}
            />
          </Link>
          <Link href="#" className={cn(buttonVariants({ variant: "default" }))}>
            Contact us
          </Link>
        </div>
      </nav>

      <section className="container mx-auto min-h-[85vh] sm:min-h-0 grid place-content-center px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          WE <DynamicText words={["DESIGN", "CODE", "CRAFT"]} /> WEB
          <br />
          <span className="text-primary tracking-[3.25px]">EXPERIENCES</span>
        </h1>
        <p className="text-md mb-8 text-[#9BA0AF] text-center max-w-[373px] mx-auto tracking-[1.43px]">
          Minting, Staking, Gaming, Web Apps, Website Development and much more.
        </p>
        <div className="gap-4 flex flex-col sm:flex-row justify-center">
          <Link href="#" className={cn(buttonVariants({ variant: "default" }))}>
            Get started
          </Link>
          <Link href="#" className={cn(buttonVariants({ variant: "outline" }))}>
            Explore our work
          </Link>
        </div>
      </section>

      <Logos />
    </div>
  );
}
