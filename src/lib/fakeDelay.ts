export const fakeDelay = (ms: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const randomDelay = (min: number = 500, max: number = 2000): Promise<void> => {
  const delay = Math.random() * (max - min) + min;
  return fakeDelay(delay);
};