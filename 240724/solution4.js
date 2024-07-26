// 문제 2번의 사자 객체를 가져옵니다.
const lion = {
    이름: "삼바",
    나이: 3,
    주인공: true,
    대사: "하쿠나마타타",
}

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
    lion.나이 += 1;
    lion.다리 = "4개";
    return lion;  
  }
  
  // 함수 실행 이후 사자의 현재 나이를 출력합니다.
  console.log(incrementAge(lion))