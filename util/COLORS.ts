export const transparentWhite = (alpha: number) => {
  return `rgba(255, 255, 255, ${alpha})`;
};
export const transparentBlack = (alpha: number) => {
  return `rgba(0, 0, 0, ${alpha})`;
};
export const transparentHutAccentDark = (alpha: number) => {
  return `rgba(69, 40, 64, ${alpha})`;
};

export const COLORS = {
  errorRed: "#A35151",
  foreground1Dark: "#2A2A2A",
  foreground1Light: transparentBlack(0.2),
  foreground2Light: "#B6B6B6",
  background1Dark: "#2A2A2A",
  greyBlueLight: "#E2E5E9",
  greyBlueDark: "#2A2D31",
  greyBlueDarker: "#1E2125",
  orangeDark: "#773800",
  orangeLight: "#E0AF84",
  orangeLighter: "#FEE0C5",
  white5: transparentWhite(0.05),
  white10: transparentWhite(0.1),
  white20: transparentWhite(0.2),
  white50: transparentWhite(0.5),
  white80: transparentWhite(0.8),
  white: "#FFFFFF",
  memoria: "#0B0D17",
  siren: "#100B17",
  story: "#12141D",
  hutAccentDark: "#1E1C20",
  hutAccentDark95: transparentHutAccentDark(0.95),
};
