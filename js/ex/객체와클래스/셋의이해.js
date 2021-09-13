// 셋(Set)의 사용 방법
// 셋을 이용해 중복을 제거하는 방법

// ES6에서 새롭게 도입된 집합 컬렉션(Collection) 기능
// 키가 없고 값만 가지는 집합 개념의 데이터 객체로, 값이 집합(셋)에 있는지 여뷰를 판단할 수있는 메서드를 제공
// 키가 없는 맵(Map)과 유사한 특징을 가지고 있다.
// 정확히는 키와 값이 같은 맵(Map)이라고 봐도 된다.

// 2개의 셋에 모두 있으면, 교집합, 2개중 1개 이상의 셋에 있으면 합집합이 되는 방식으로 값이 어디에 속해 있는지를 판단 할수있다.


// ** 셋(Set)의 값 추가/삭제
// 셋 인스턴스를 생성 후 "add(값)"메서드로 셋에 추가할 수있다. 값은 중복될 수 없다.
// 객체의 속성이 중복될 수 없는 것 처럼 값 자체가 키이고 값이 된다.
// 셋의 값 삭제는 "delete(값)" 메서드 : 삭제에 성공하면 true, 실패하면 false

const s1 = new Set();
const s2 = new Set();
s1.add('라이언');
s1.add('어차피');
s1.add('프로도');

s2.add('콘');
s2.add('무지');
s2.add('프로도');

if(s1.has('프로도') && s2.has('프로도')){
  console.log('두집합에 모두 있음');
  s2.delete('프로도')
}


// 셋(Set)의 값 순환
// 맵의 순환 구문과 동일

// 맵과 마찬가지로 키와 값이 같은 맵(Map)의 특징이 있기 때문에, "keys()"와 "values()"메서드의 결과가 동일하다.
// 키와 값을 쌍으로 반환하는 "entries()" 메서드를 사용할 경우[값, 값]을 반환한다.



// 셋의 순환의 예
let arr = ['라이언', '프로도', '무지'];
let s = new Set(arr);
console.log('길이: ', s.size);

//파라메터로 키 값을 각각 받아 순환
s.forEach(function(value, key){
  console.log(key + ' ' + value);
});
//키-값 쌍으로 순환
for(let [key, value] of s.entries()){
  console.log(key + ' ' +value);
}
//값만 순환
for(let value of s.values()){
  console.log('value', value);
}

// 키가 없는 맵이라고 생각하면 된다.



// 셋(Set) <->배열의 상호 변환
// 셋은 배열로 변환할 수 있습니다. 반대로 배열을 셋으로도 변경할 수 있다.
// 셋 인스턴스 생성 인자로 배열을 넣으면, 배열 요소들을 값으로 하는 셋이 생성됨.
// 인자로 사용하는 배열을 반드시 1차원 배열이어야 한다.
// 반대로 셋을 "Array.from()"메서드를 사용해 다시 배열로 변환할 수 있다.

let arr = ['라이언', '프로도', '무지'];
let s = new Set(arr);
let newArr = Array.from(s);

s.forEach(function(el){
  console.log('el', el);
});
console.log('newArr', newArr);

// 셋으로 배열 중복제거
// 셋과 배열을 상호 변환하는 기능과, 중복 요소를 허용하지 않는 셋의 특징을 활용하면 중복요소가 있는 배열을 중복 요소가 없는 배열을 만들수 있다.

// 중복 요소가 있는 배열을 셋으로 변환하면 중복 값이 없는 셋으로 변환된다. 셋을 다시 배열로변환하면 중복 요소가 없는 배열이 생성된다.

let arr = ['라이언', '프로도', '무지', '프로도'];
let s = new Set(arr);
let newArr = Array.from(s)

console.log('newArr', newArr);