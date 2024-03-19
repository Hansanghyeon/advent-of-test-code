export function snakeToCamel(snake: string): string {
  // 연속된 밑줄을 포함하거나 시작 또는 끝에 밑줄이 있는 경우 문자열을 그대로 반환
  if (/^_+|_+$|__+/.test(snake)) {
    return snake;
  }

  return snake.toLowerCase().replace(/([-_]\w)/g, (match) => match[1].toUpperCase())
}