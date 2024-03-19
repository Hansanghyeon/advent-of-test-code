export function camelToSnake(camel: string): string {
  // 연속된 대문자 또는 대문자와 소문자 사이에 밑줄을 추가
  return camel
    .replace(/([a-z])([A-Z])/g, '$1_$2') // 소문자와 대문자 사이
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2') // 연속된 대문자 다음에 소문자가 오는 경우
    .toLowerCase(); // 전체 문자열을 소문자로 변환
}