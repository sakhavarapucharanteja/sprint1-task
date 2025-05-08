export const getDateByUnixTimestamp = (ts: number = 0): string => {
  if (ts === 0) {
    return "";
  }

  return `${new Date(ts * 1000)}`.slice(16, 21);
};
