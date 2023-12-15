/**
 * 
 * @param format {{h}} {{s}} {{l}} 이 변횐된다.
 * @example
 * hexToHSL('hsl({{h}}, {{s}}%, {{l}}%)')('#ffffff');
 * // hsl(0, 0%, 100%)
 */
export function hexToHSL(format: string) {
  return function (hex: string): string {
    // Hex를 RGB로 변환
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
  
    // RGB를 [0, 1] 범위로 변환
    r /= 255;
    g /= 255;
    b /= 255;
  
    // 최소/최대 값과 차이 계산
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
  
    // 색상, 채도, 밝기 초기화
    let h = 0, s = 0, l = 0;
    l = (max + min) / 2;
  
    if (delta != 0) {
        s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  
        switch (max) {
            case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
            case g: h = (b - r) / delta + 2; break;
            case b: h = (r - g) / delta + 4; break;
        }
  
        h /= 6;
    }
  
    // HSL로 변환
    h = Math.round(360 * h);
    s = Math.round(100 * s);
    l = Math.round(100 * l);
  
    // format 문자열에 HSL 값 적용
    return format.replace('{{h}}', h.toString())
                 .replace('{{s}}', s.toString())
                 .replace('{{l}}', l.toString());
  }
}