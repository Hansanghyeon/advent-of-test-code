# snakeToCamel 함수

`snakeToCamel` 함수는 snake_case로 된 문자열을 camelCase로 변환하는 TypeScript 유틸리티입니다. 표준 snake_case 규칙을 camelCase로 변환하는 데에 목적이 있으며, JavaScript와 TypeScript에서 변수와 함수 이름을 작성할 때 더 친숙한 camelCase를 사용할 수 있도록 돕습니다. 이 문서는 함수의 목적, 사용법, 예제를 제공합니다.

## 목적

JavaScript와 TypeScript에서는 변수와 함수 이름을 camelCase로 명명하는 것이 관례입니다. 그러나 API 또는 snake_case를 사용하는 시스템과 작업할 때, 코드베이스의 일관성을 유지하기 위해 이러한 이름을 camelCase로 변환해야 할 수 있습니다. `snakeToCamel` 함수는 이러한 변환 과정을 자동화하여 변수 및 함수 이름이 camelCase 규칙을 따르도록 합니다.

## 설치

```sh
npm install @hyeon/calc-ts
```

```ts
import * as C from '@hyeon/calc-ts/fp';
```

## 사용법

snakeToCamel 함수는 snake_case인 단일 문자열 인수를 받아 camelCase 버전의 문자열을 반환합니다. 기본 사용 예시는 다음과 같습니다:

```ts
const camelCaseString = snakeToCamel('example_snake_case');
console.log(camelCaseString); // 출력: exampleSnakeCase
```

### 매개변수

s (string): camelCase로 변환하고자 하는 snake_case 문자열입니다.

### 반환값

(string): 입력 문자열의 camelCase 버전입니다.

### 예제

다음은 snakeToCamel 함수 사용 예시입니다:

```typescript
console.log(snakeToCamel('this_is_a_test')); // "thisIsATest"
console.log(snakeToCamel('another_example_here')); // "anotherExampleHere"
console.log(snakeToCamel('THIS_IS_UPPERCASE')); // "thisIsUppercase"
console.log(snakeToCamel('__edge__case__')); // "__edge__case__"
```

## 참고사항

- 함수는 입력에 대해 대소문자를 구분하지 않지만, 항상 camelCase 관례를 따라 첫 글자가 소문자인 문자열을 반환합니다.
- 표준 snake_case 규칙을 따르지 않는 문자열(예: 앞뒤에 밑줄이 있거나 연속된 밑줄이 있는 경우)은 그대로 반환됩니다.
- 함수는 밑줄을 제외한 비문자 숫자 문자를 처리하지 않습니다. 이는 snake_case 명명법에서 일반적이지 않기 때문입니다.

## 기여하기

snakeToCamel 함수를 개선하거나 기능을 확장하기 위한 기여를 환영합니다. 저장소를 포크하고 변경 사항을 만든 후 풀 리퀘스트를 제출하세요.

## 라이센스

MIT