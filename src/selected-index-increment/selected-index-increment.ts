
interface Item {
  id: number
}
export function upExample(target: Item[], selected: Item[]): Item[] {
  const result: Item[] = [...target] // 대상 배열의 복사본 생성

  for (const selectedItem of selected) {
    // 대상 배열에서 현재 선택한 항목의 인덱스 찾기
    const index = result.findIndex((item) => item.id === selectedItem.id)

    // 항목이 배열의 시작점에 없으면 한 위치만큼 이동합니다
    if (index > 0) {
      ;[result[index - 1], result[index]] = [result[index], result[index - 1]]
    }
  }

  return result
}

export function downExample(target: Item[], selectedItems: Item[]): Item[] {
  const result: Item[] = [...target] // 타겟 배열의 복사본을 생성합니다.

  // selectedItems 배열을 뒤에서부터 순회하여, 앞에 있는 요소의 이동으로 인한 영향을 최소화합니다.
  for (let i = selectedItems.length - 1; i >= 0; i--) {
    const selectedItem = selectedItems[i]

    // 현재 선택된 항목의 인덱스를 타겟 배열에서 찾습니다.
    const index = result.findIndex((item) => item.id === selectedItem.id)

    // 항목이 배열의 끝이 아닌 경우, 한 위치 아래로 이동시킵니다.
    if (index >= 0 && index < result.length - 1) {
      ;[result[index], result[index + 1]] = [result[index + 1], result[index]]
    }
  }

  return result
}
