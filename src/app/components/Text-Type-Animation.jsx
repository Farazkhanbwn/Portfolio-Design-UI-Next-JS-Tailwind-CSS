"use client";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Faraz",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1000,
        "Mobile App Developer",
        1000,
        "Front End Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
