import { FC } from "react";

// sometimes i don't want to use margin.
// instead i can use a div with width/height to separate elements
export const SpaceBox: FC<{ width?: number, height?: number }> = ({
  width = 0,
  height = 0,
}) => {
  return <div style={{ width, height }}></div>
}
