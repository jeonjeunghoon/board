export const parseFormData = <Value>(formData: FormData, ...keys: string[]) => {
  const parsedData: Record<string, Value> = {};

  keys.forEach((key) => {
    const value = formData.get(key);
    parsedData[key] = value as Value;
  });

  return parsedData;
};
