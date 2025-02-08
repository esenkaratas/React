import { useDebugValue } from "react";
import { useWindowSize } from "./useWindowSize";

export function useWithinWindowWidth(minWidth, maxWidth) {
  const { width } = useWindowSize();
  const isWithinRange = width >= minWidth && width <= maxWidth;

  useDebugValue(
    `Width ${width} → ${isWithinRange ? "✅ Inside" : "❌ Outside"}`
  );

  return isWithinRange;
}
