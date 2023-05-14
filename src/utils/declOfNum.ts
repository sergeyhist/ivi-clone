/**params
 * declOfNum(1, ['минута', 'минуты', 'минут']); // вернёт — 1 минута
 * declOfNum(2, ['минута', 'минуты', 'минут']); // вернёт — 2 минуты
 * declOfNum(5, ['минута', 'минуты', 'минут']); // вернёт — 5 минут
 */

export const declOfNum = (number: number, text_forms: string[]): string => {
  const remainder: number = (Math.abs(number) % 100) % 10;
  if (number > 10 && number < 20) {
    return `${number} ${text_forms[2]}`;
  }
  if (remainder > 1 && remainder < 5) {
    return `${number} ${text_forms[1]}`;
  }
  if (remainder == 1) {
    return `${number} ${text_forms[0]}`;
  }
  return `${number} ${text_forms[2]}`;
};
