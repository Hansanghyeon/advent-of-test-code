import * as O from 'fp-ts/Option'

// O.fromNullable 함수처럼
// false이면 text값을 Some으로 감싸서 반환하고
// true이면 None을 반환하는 함수를 만들어보자.

export function isSnakeCase(text: string) {
  const snakeCaseRegex = /^[a-z0-9]+(_[a-z0-9]+)*$/;
  // return snakeCaseRegex.test(text);
  return snakeCaseRegex.test(text) ? O.some(text) : O.none
}
