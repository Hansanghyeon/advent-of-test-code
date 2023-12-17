import { pipe, flow } from 'fp-ts/function'
import * as A from 'fp-ts/Array'

// 선택한 요소의 순서를 변경합니다
// 선택한 요소중에 첫번째 요소를 기준으로 앞으로 이동합니다.
// 선택한 요소중 첫번째 요소가 아닌 다른 요소는 첫번째 요소의 뒤로 순서에 맞게 이동합니다.
// 선택한 요소중에 첫번째 요소를 기준으로 앞으로 이동하면 앞에있던 요소는 선택된 요소들의 뒤로 이동합니다.
interface Item {
  id: number
}
export function upExample(target: Item[], selected: Item[]): Item[] {
  // 선택된 요소중에 첫번째 요소를 replace할 대상으로한다.
  // 선택된 요소중에 첫번째 요소를 제외한 다른 요소들을 모두 원본데이터에서 제거한다.
  // 선택된 요소중 첫번째를 제외한 다른 요소들
  const first = selected[0]
  const rest = selected.slice(1)
  const removedElements = pipe(
    target,
    A.filter((t) => !rest.some((s) => s.id === t.id))
  )

  // 첫번째 요소 인덱스를 찾는다.
  const firstIndex = target.findIndex((t) => t.id === first.id)

  // 첫번째 요소를 제거한다.
  removedElements.splice(firstIndex, 1)

  if (firstIndex === 0) {
    // selected의 뒤에부터 순회를하면서
    // 0인덱스에 삽입한다.
    for (let i = 0; i < selected.length; i++) {
      removedElements.splice(0, 0, selected[selected.length - 1 - i])
    }
  } else {
    // selected의 갯수만큼 순회를하면서
    // firstIndex - 1 인덱스에 삽입한다.
    for (let i = -1; i < selected.length - 1; i++) {
      removedElements.splice(firstIndex + i, 0, selected[i + 1])
    }
  }

  return removedElements
}

export function downExample(target: Item[], selected: Item[]): Item[] {
  // 선택된 요소들 중 마지막 요소
  const last = selected[selected.length - 1]

  // 선택된 요소들 중 마지막 요소를 제외한 나머지
  const rest = selected.slice(0, -1)

  // 원본 배열에서 선택된 요소들을 제거
  const removedElements = target.filter((t) => !rest.some((s) => s.id === t.id))

  // 마지막 요소 인덱스를 찾는다
  const lastIndex = removedElements.findIndex((t) => t.id === last.id)

  // 마지막 요소를 제거한다
  removedElements.splice(lastIndex, 1)

  // 선택된 요소들을 올바른 위치에 삽입
  if (lastIndex === removedElements.length - 1) {
    // 마지막 요소가 배열의 끝에 있으면, 선택된 요소들을 배열의 끝에 추가
    removedElements.push(...selected)
  } else {
    // 선택된 요소들을 마지막 요소가 있던 위치 다음에 순서대로 삽입
    for (let i = 0; i < selected.length; i++) {
      removedElements.splice(lastIndex + i + 1, 0, selected[i])
    }
  }

  return removedElements
}