"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
  <div className="flex-1 pt-20 padding-x">
    <h1 className="hero__title mb-2">
      Discover, reserve, secure a ride—swift and incredibly simple!
    </h1>

    <p className="hero__subtitle mb-4">
      Simplify your journey through car rental with our seamless booking procedure.
    </p>

    <CustomButton
      title="Explore Cars"
      containerStyles="bg-primary-blue text-white rounded-full mt-4"
      handleClick={handleScroll}
    />
  </div>
  <div className="hero__image-container">
    <div className="hero__image">
      <Image src="/hero.png" alt="hero" fill className="object-contain" />
    </div>

    <div className="hero__image-overlay" />
  </div>
</div>

  );
};

export default Hero;
