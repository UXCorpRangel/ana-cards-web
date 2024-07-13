/**
 * Devuelve un string con el número formateado.
 *
 * @param num Número a formatear.
 * @param digits Número de dígitos que tendrá el número.
 * @returns Número formateado.
 *
 * @example
 * formatNumber(1, 3); // '001'
 */
export function formatNumber(num: number, digits: number) {
  return num.toString().padStart(digits, '0');
}

/**
 * Devuelve un string con el número de carta formateado.
 *
 * @param num Número de carta.
 * @returns Número de carta formateado.
 *
 * @example
 * stringifyCardNumber(1); // '#001'
 */
export function stringifyCardNumber(num: number) {
  return `#${formatNumber(num, 3)}`;
}
