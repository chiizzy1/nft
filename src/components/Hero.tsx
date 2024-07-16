import { FC } from "react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { ArrowIcon, HeroImage, PlayIcon, StarImage } from "@/assets";
import { stats } from "@/constants";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="pt-[204px] pb-[114px] z-[1]">
      <div className="container mx-auto w-full relative">
        <div className="flex flex-col gap-[80px] w-full max-w-[734px]">
          <div className="flex flex-col gap-[32px]">
            <h1 className="text-[42px] font-extrabold leading-[75.6px] tracking-[10%] text-white">
              Discover <span className="text-primary">Unique</span> Digital Art & Collectibles
            </h1>
            <span className="text-[24px] leading-[43.2px] font-light tracking-[6%] text-white">
              Explore, buy, and sell extraordinary NFTs on our decentralized marketplace.
            </span>
            <div className="flex items-center gap-[14px]">
              <Button>Explore Now</Button>

              <Button variant="ghost" size="lg">
                <Image src={PlayIcon} alt="play video icon" className="mr-[10px]" /> Watch Demo Video
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-[53px]">
            {stats.map(({ id, number, desc }) => (
              <div key={id} className="flex flex-col w-[117px]">
                <span className="text-[30px] leading-[54px] tracking-[6%] text-center text-white">
                  {number}k<span className="text-primary">+</span>
                </span>
                <span className="text-[16px] leading-[28.8px] tracking-[6%] text-center text-primary">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <Image src={HeroImage} width={557} height={553} alt="hero image" className="hidden lg:block absolute bottom-0 right-0" />
        <Image
          src={ArrowIcon}
          width={75}
          height={75}
          alt="arrow icon"
          className="hidden lg:block absolute bottom-[16.5%] left-[57.5%]"
        />
        <Image
          src={StarImage}
          width={224}
          height={224}
          alt="star image"
          className="hidden lg:block absolute -top-[15%] right-[4%] -z-[1]"
        />
      </div>
    </section>
  );
};

export default Hero;
