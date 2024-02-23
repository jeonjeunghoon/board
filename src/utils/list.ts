export const generateNumberListByAscendingOrdered = (startNumber: number, length: number) => {
  return Array.from({ length }, (_, i) => i + startNumber);
};
