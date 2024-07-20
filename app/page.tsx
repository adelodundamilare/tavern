import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logos from "@/components/logos";
import DynamicText from "@/components/dynamic-text";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white"
      style={{ backgroundImage: "url(/images/Forge_Scenery.png)" }}
    >
      <nav className="p-6" role="navigation" aria-label="Main">
        <div className="flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold">
            <Image
              src="/images/logo.png"
              alt="Tavern Forge"
              sizes="/images/logo@2x.png 2x"
              width={132}
              height={52}
            />
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "default" }))}
            aria-label="Contact us"
          >
            Contact us
          </Link>
        </div>
      </nav>

      <section className="absolute left-0 top-0 right-0 bottom-0 mx-auto min-h-[75vh] sm:min-h-0 grid place-content-center text-center">
        <h1 className="text-5xl font-bold mb-4">
          WE <DynamicText words={["DESIGN", "CODE", "CRAFT"]} /> WEB
          <br />
          <span className="text-primary tracking-[3.25px]">EXPERIENCES</span>
        </h1>
        <p className="text-md mb-8 text-[#9BA0AF] text-center max-w-[373px] mx-auto tracking-[1.43px]">
          Minting, Staking, Gaming, Web Apps, Website Development and much more.
        </p>
        <div className="gap-4 flex flex-col sm:flex-row justify-center">
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "default" }))}
            aria-label="Get started with our services"
          >
            Get started
          </Link>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: "outline" }))}
            aria-label="Explore our portfolio"
          >
            Explore our work
          </Link>
        </div>
      </section>

      <div className="absolute bottom-2 flex justify-center space-x-4 mt-8 w-full">
        <Logos />
      </div>
    </div>
  );
}
