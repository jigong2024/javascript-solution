// 문제 3. 배열 메서드 활용하기: **map()**

// `*3.js` 파일을 만들어 멘토링 상태를 확인할 수 있는 `isMentoring` 속성을 추가한 `newTutors` 를 만들어주세요.*

let tutors = [
  {
    name: "최원장",
    time: "9to6",
  },
  {
    name: "윤창식",
    time: "9to6",
  },
  {
    name: "박가현",
    time: "9to6",
  },
  {
    name: "김병연",
    time: "9to6",
  },
];

const newTutors = tutors.map(function (tutor) {
  const newTutorList = {
    name: tutor.name,
    time: tutor.time,
    isMentoring: true,
  };
  return newTutorList;
});

console.log(newTutors);

//1. 배열 메서드인 `map` 을 사용하여 완성해주세요.
//2. `isMentoring` 속성이 추가된 새로운 객체 배열을 만듭니다.(값은 `true`로 설정해주세요.)
//3. 반환값이 있는 `map` 을 통해 `newTutors` 변수에 담아서 출력해주세요.
