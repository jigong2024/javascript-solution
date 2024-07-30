// 문제 1. 쇼핑 목록 수정하기

// `*1.js` 파일을 만들어 변수* `shoppingList` 의 요소를 수정해주세요.

let shoppingList = ["우유", "계란", "아이스크림", "목살"];

shoppingList.pop();
shoppingList.push("삼겹살");

console.log(shoppingList);
// 출력 : [ '우유', '계란', '아이스크림', '삼겹살' ]

// - 배열의 마지막 요소인 `'목살'` 을 제거한 후, `'삼겹살'` 을 추가해주세요.
// - 출력 결과
// ['우유', '계란', '아이스크림', '삼겹살']
