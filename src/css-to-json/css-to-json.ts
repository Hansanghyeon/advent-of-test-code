function cssToJson(cssString: string): Record<string, string> {
  // CSS 속성을 저장할 빈 개체를 초기화합니다
  const cssObject: { [key: string]: string } = {};

  // 속성을 분리하려면 문자열을 세미콜론으로 분할
  const properties = cssString.trim().split(';');

  properties.forEach(property => {
      // 콜론별로 속성을 분할하여 키와 값을 구분
      const [key, value] = property.split(':');

      if (key && value) {
          // 키에서 공백을 잘라내고 개체에 추가합니다
          const convertKey = key.trim();
          // 값에서 공백을 잘라내고 개체에 추가합니다
          cssObject[convertKey] = value.trim();
      }
  });

  return cssObject;
}

/**
 * alias
 */
const css2json = cssToJson

export { cssToJson, css2json }
export default cssToJson