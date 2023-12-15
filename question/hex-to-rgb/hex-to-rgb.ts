/**
 * Hex 색상을 RGB로 변환한다.
 * @param format {{r}}, {{g}}, {{b}}가 변환된다.
 * @example
 * HexToRgb('{{r}} {{g}} {{b}}')('#ffffff');
 */
export function HexToRgb(format: string) {
  return function (hex: string): string {
    // Hex를 RGB로 변환
    let r = 0,
      g = 0,
      b = 0
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16)
      g = parseInt(hex.substring(3, 5), 16)
      b = parseInt(hex.substring(5, 7), 16)
    }

    // format 문자열에 RGB 값 적용
    return format
      .replace('{{r}}', r.toString())
      .replace('{{g}}', g.toString())
      .replace('{{b}}', b.toString())
  }
}
