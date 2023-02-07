export function arabicNumber(num: number) {
  const arabicNumerals = [
    '\u0660',
    '\u0661',
    '\u0662',
    '\u0663',
    '\u0664',
    '\u0665',
    '\u0666',
    '\u0667',
    '\u0668',
    '\u0669',
  ];
  let str = '';
  while (num > 0) {
    str = arabicNumerals[num % 10] + str;
    num = Math.floor(num / 10);
  }
  return str;
}
