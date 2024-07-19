"use client";

import Image from "next/image";

const logos = [
  {
    src: "/images/CC-logo-white.png",
    alt: "Cardano Casino",
    srcSet: "/images/CC-logo-white@2x.png 2x, /images/CC-logo-white@3x.png 3x",
  },
  {
    src: "/images/CARDANO-THOR-LOGOWORDS-ONLY-WHITE.png",
    alt: "Cardano Tavern",
    srcSet:
      "/images/CARDANO-THOR-LOGOWORDS-ONLY-WHITE@2x.png 2x, /images/CARDANO-THOR-LOGOWORDS-ONLY-WHITE@3x.png 3x",
  },
  {
    src: "/images/Goombles-logo-light.png",
    alt: "Goombles",
    srcSet:
      "/images/Goombles-logo-light@2x.png 2x, /images/Goombles-logo-light@3x.png 3x",
  },
  {
    src: "/images/Snekkies-logo-light.png",
    alt: "Snekkes",
    srcSet:
      "/images/Snekkies-logo-light@2x.png 2x, /images/Snekkies-logo-light@3x.png 3x",
  },
  {
    src: "/images/frigid-logo-white.png",
    alt: "Frigid",
    srcSet:
      "/images/frigid-logo-white@2x.png 2x, /images/frigid-logo-white@3x.png 3x",
  },
  {
    src: "/images/MVPz_white_transparent_bg.png",
    alt: "MVPz",
    srcSet:
      "/images/MVPz_white_transparent_bg@2x.png 2x, /images/MVPz_white_transparent_bg@3x.png 3x",
  },
];


export default function Logos() {
    return (
      <div className="absolute bottom-4 flex justify-center space-x-4 mt-8 w-full">
        <div
          className="group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]"
          role="region"
          aria-label="Partner Logos"
        >
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                sizes={logo.srcSet}
                className="mx-12 inline opacity-50 hover:opacity-100"
                width={110}
                height={60}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                sizes={logo.srcSet}
                className="mx-12 inline opacity-50 hover:opacity-100"
                width={110}
                height={60}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }