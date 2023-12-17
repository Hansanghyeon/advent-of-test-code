## 문제

`const target = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]`

- 테스트 `up(target, [{id: 2}, {id: 3}])`
- 기대 결과 `[{id: 2}, {id: 3}, {id: 1}, {id: 4}, {id: 5}]`
- 테스트 `up(target, [{id: 2}, {id: 4}])`
- 기대 결과 `[{id: 2}, {id: 4}, {id: 1}, {id: 3}, {id: 5}]`
- 테스트 `up(target, [{id: 1}, {id: 5}])`
- 기대 결과 `[{id: 1}, {id: 5}, {id: 2}, {id: 3}, {id: 4}]`
- 테스트 `up(target, [{id: 3}, {id: 6}])`
- 기대 결과 `[{id: 1}, {id: 3}, {id: 6}, {id: 2}, {id: 4}, {id: 5}]`