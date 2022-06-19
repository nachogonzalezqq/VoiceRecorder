export const processMiliseconds = (miliseconds: number) => {
  const seconds: number = Math.floor(miliseconds / 1000);
  if (seconds < 10) return `00:0${seconds}`;
  if (seconds <= 60) return `00:${seconds}`;
  return `${seconds / 60}:${seconds % 60}`;
};