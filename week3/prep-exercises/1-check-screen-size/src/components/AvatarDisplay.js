import React from "react";
import { BigHead } from "@bigheads/core";
import { useWithinWindowWidth } from "../hooks/useWithinWindowWidth";

const randomizeFeatures = () => ({
  hat: Math.random() > 0.5 ? "beanie" : "turban",
  hatColor: ["black", "blue", "red", "green"][Math.floor(Math.random() * 4)],
  accessory: Math.random() > 0.5 ? "roundGlasses" : "shades",
  clothing: Math.random() > 0.5 ? "shirt" : "hoodie",
  clothingColor: ["white", "blue", "red", "gray"][
    Math.floor(Math.random() * 4)
  ],
  graphic: ["react", "vue", "angular", "js"][Math.floor(Math.random() * 4)],
});

const avatars = {
  big: { name: "Mithi", ...randomizeFeatures() },
  medium: { name: "Diana", ...randomizeFeatures() },
  small: { name: "Mikong", ...randomizeFeatures() },
};

export function AvatarDisplay() {
  const isBig = useWithinWindowWidth(1001, Infinity);
  const isMedium = useWithinWindowWidth(700, 1000);
  const isSmall = useWithinWindowWidth(0, 699);

  let avatar;
  if (isBig) avatar = avatars.big;
  else if (isMedium) avatar = avatars.medium;
  else if (isSmall) avatar = avatars.small;

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>{avatar.name}</h2>
      <BigHead {...avatar} />
      <p>Screen Size: {isBig ? "Big" : isMedium ? "Medium" : "Small"}</p>
    </div>
  );
}
