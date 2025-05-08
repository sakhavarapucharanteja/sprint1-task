import { getDateByUnixTimestamp } from "./getDateByUnixTimestamp";

describe("Timestamp to Date validation", () => {
  test("Valid timestamp 1652475795", () => {
    expect(getDateByUnixTimestamp(1652475795)).toBe("00:03");
  });
  test("Invalid timestamp '0'", () => {
    expect(getDateByUnixTimestamp(0)).toBe("");
  });
});
