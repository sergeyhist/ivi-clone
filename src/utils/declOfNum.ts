/**params
 * declOfNum(1, ['минута', 'минуты', 'минут']); // вернёт — минута
 * declOfNum(2, ['минута', 'минуты', 'минут']); // вернёт — минуты
 * declOfNum(5, ['минута', 'минуты', 'минут']); // вернёт — минут
 */

export const declOfNum = (number: number, text_forms: string[]): string => {
  number = Math.abs(number) % 100;
  const remainder: number = number % 10;
  if (number > 10 && number < 20) {
    return text_forms[2];
  }
  if (remainder > 1 && remainder < 5) {
    return text_forms[1];
  }
  if (remainder == 1) {
    return text_forms[0];
  }
  return text_forms[2];
};
