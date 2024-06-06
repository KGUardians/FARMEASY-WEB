export const gramToKilogram = (grams: number): string => {
  if (grams < 1000) {
    return `${grams}g`;
  }
  const kilograms = grams / 1000;
  return `${kilograms.toFixed(1)}kg`;
};
