const PRESENT = /^present$/i;

function startOfMonth(label: string): Date {
  const d = new Date(label.trim());
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid timeline date label: ${label}`);
  }
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfRange(endLabel: string): Date {
  if (PRESENT.test(endLabel.trim())) {
    return new Date();
  }
  const d = new Date(endLabel.trim());
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid timeline date label: ${endLabel}`);
  }
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
}

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function formatYears(years: number): string {
  if (years < 1 / 12) {
    return "< 1 month";
  }
  if (years < 1) {
    const months = Math.max(1, Math.round(years * 12));
    return months === 1 ? "1 month" : `${months} months`;
  }

  const nearestYear = Math.round(years);
  if (Math.abs(years - nearestYear) < 0.06) {
    return nearestYear === 1 ? "1 year" : `${nearestYear} years`;
  }

  const oneDecimal = Math.round(years * 10) / 10;
  return `${oneDecimal} years`;
}

/** Human-readable tenure from timeline month labels (e.g. `February 2023`, `Present`). */
export function formatTenure(startLabel: string, endLabel: string): string {
  const start = startOfMonth(startLabel);
  const present = PRESENT.test(endLabel.trim());

  let years: number;
  if (present) {
    const end = new Date();
    const ms = end.getTime() - start.getTime();
    if (ms < 0) {
      return "";
    }
    years = ms / MS_PER_YEAR;
  } else {
    const end = endOfRange(endLabel);
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    if (months < 0) {
      return "";
    }
    years = months / 12;
  }

  return formatYears(years);
}
