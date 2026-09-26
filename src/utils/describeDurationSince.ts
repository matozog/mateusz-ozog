/**
 * Human friendly duration used in the introduction, e.g. "over 6 years" or
 * "nearly 3 years" (when 9+ months into the next year).
 */
const describeDurationSince = (start: Date, now: Date = new Date()) => {
  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const pluralize = (value: number) => `${value} year${value === 1 ? '' : 's'}`;

  if (months >= 9) return `nearly ${pluralize(years + 1)}`;
  if (years === 0) return `${totalMonths} months`;
  if (months === 0) return pluralize(years);
  return `over ${pluralize(years)}`;
};

export default describeDurationSince;
