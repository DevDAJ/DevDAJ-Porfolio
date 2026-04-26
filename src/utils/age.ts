import { birthDate } from "../data/site";

const isoDate = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Calendar age from an ISO `YYYY-MM-DD` birth date relative to `asOf` (default: now).
 */
export function getAgeFromIsoDate(
  date: string,
  asOf: Date = new Date(),
): number {
  const match = isoDate.exec(date);
  if (!match) {
    throw new Error(`birth date must be YYYY-MM-DD, got: ${date}`);
  }

  const y = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);

  let age = asOf.getFullYear() - y;
  if (
    asOf.getMonth() < month ||
    (asOf.getMonth() === month && asOf.getDate() < day)
  ) {
    age -= 1;
  }

  return Math.max(0, age);
}

/** Age derived from {@link birthDate} in site config. */
export function getAge(asOf: Date = new Date()): number {
  return getAgeFromIsoDate(birthDate, asOf);
}
