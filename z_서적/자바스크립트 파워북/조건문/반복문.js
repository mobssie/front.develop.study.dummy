// 1부터 9까지 홀수만 출력
for(let i = 1; i < 10; i=i+2){
  console.log(i)
}

// for 순환문
let friends = [
  {name: '라이언', age: 5},
  {name: '어피치', age: 5},
  {name: '콘', age: 5},
  {name: '라이언', age: 5},
]
for (let i = 0; friends.length; i++){
  console.log('console: ', '이름: ' + friends[i].name + ', 나이: ' + friends[i].age);
}

// for ~ of 문
// 여러 개의 요소를 가지는 배열(Array), 문자열(String), 맵(Map), 셋(Set)의 경우, 
// 모든 요소에 대해서 조건을 체크를 하거나 순환하면서 요소의 값을 갱신하는 작업을 할 필요가 있는 경우가 있다.


// for ~ of 배열(Array), 문자열(String), 맵(Map), 셋(Set) 객체에 사용. 속성이 있는 객체만 사용
// for ~ in 일반 객체의 속성에 접근에 사용.

let friends = [
  {name: '라이언', age: 5},
  {name: '어피치', age: 5},
  {name: '콘', age: 5},
  {name: '라이언', age: 5},
]
for (let friend of friends){
  console.log('console: ', '이름: ' + friend.name + ', 나이: ' + friend.age);
}




// for, for ~ of 반복문에서 배열이나 객체의 요소를 삭제하는 작업을 하면 에러를 발생
// 요소 삭세 방법에 따라서는 배열요소는 삭제되었지만, 배열 길이는 줄지 않은 경우도 있기 때문에,
// 예상과는 다른 결과를 가져올 수도 있다.
// ==> 반복문 안에서는 순환을 하고 있는 배열이나 객체의 요소를 삭제하는 것은 피해야합니다.

let ryon = {name: '라이언', age: 5, gender: 'male'};
for(let prop in ryon){
  console.log('속성: ' +prop+' 나이:'+ryon[prop]);
}

// forEach문
// 배열.forEach(요소[, 인덱스]){
//   // 요소 처리 실행문
// }

let friends = [
  {name: '라이언', age: 5},
  {name: '어피치', age: 5},
  {name: '콘', age: 5},
  {name: '라이언', age: 5},
]
friends.forEach(function(prop, index){
  console.log('속성: ' +prop.name+' 나이: '+prop.age);
})


// while 순환문 출력의 예
let friends = [
  {name: '라이언', age: 5},
  {name: '어피치', age: 5},
  {name: '콘', age: 5},
  {name: '라이언', age: 5},
]
let i = 0;
while(i < friends.length){
  console.log('console: ', '이름: ' + friends[i].name + ', 나이: ' + friends[i].age);
  i ++;
} 
i = 0;
do {
  console.log('console: ', '이름: ' + friends[i].name + ', 나이: ' + friends[i].age);
  i ++;
} while (i < friends.length)

// 배열 등의 순환할 때 인덱스 값의 증가는 반복문 안에서 반드시 처리를 해주어야 하며,
// 여러개의 while문을 같은 인덱스 변수를 사용할 경우 반드시 사이에 초기화를 다시 해주어야 한다.

// while 순환문을 사용하면서 가장 많이 하는 실수가 무한 루프에 빠지는 것.
// while 문을 작성할 때는 조건을 만족해 루프를 빠져나갈 수 있도록 조건문을 작성해야 한다.
// 조건을 만족하는지 확실하지 않을 때는 추가의 조건을 붙여 일정 조건 이상이 되면 무조건 루프를 빠져나가도록 해야한다.

// while문을 실행하는 중간에 반복문을 빠져나가고 싶은 경우 조건 실행문 안에서 조건을 확인해 "break;"문을 추가하면
// 강제로 while문을 종료하고 빠져나갈수 있다.

let friends = [
  {name: '라이언', age: 5},
  {name: '어피치', age: 5},
  {name: '콘', age: 5},
  {name: '라이언', age: 5},
]
let i = 0; // 인덱스 변수를 사용할 경우 반드시 사이에 초기화를 다시 해주어야 한다.
while(i < friends.length){
  if(i > 2){
    break;
  }
  console.log('이름: ' + friends[i].name + ' 나이: ' + friends[i].age );
  i++;
}


// 대부분의 개발 언어에서 순환문, 반복문을 중간에 빠져나가는 중단문을 사용을 권장하지 않는다.
// 언어 명세에 정의 되어있지만, 사용을 권장하지 않은 이상한 공존이 자바스트립트에도 존재한다.
// 이유는 여러가지가 있지만 속도 저하와 그리고 프로그램 로직을 건너뛰는 것으로 인한 가독성 저하

// 자바스크립트 중단문은 break, continue, return이 있다.

// 그중 break 는 순환문, 또는 구문을 빠져가는 역활을 하고, continue는 순환문의 끝으로 이동해 다음 순환문을 실행
// 둘 다 사용을 권장하지 않는다.


// 실제로 성능적인 저하는 미미하지만, 프로그램의 로직을 중간에 빠져나가면서 로직의 흐름을 이해하고 파악하는데 심각한 저하가 온다
// break, continue는 아주 부득이한 경우가 아닌 이상 사용해서는 안된다.