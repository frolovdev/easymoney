const RoundingModes = {
  HALF_EVEN: "HALF_EVEN",
  HALF_UP: "HALF_UP",
  HALF_DOWN: "HALF_DOWN",
  FLOOR: "FLOOR",
  CEILING: "CEILING",
  DOWN: "DOWN",
  UP: "UP"
} as const;

type RoundingModesType = keyof typeof RoundingModes;

export { RoundingModes, RoundingModesType };
