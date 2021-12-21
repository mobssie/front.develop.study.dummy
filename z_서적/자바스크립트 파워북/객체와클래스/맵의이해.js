// 맵의 이해

// 맵의 선언과 사용 예
const map = new Map(); // 맵 인스턴스 생성
let arr = [1, 2];

map.set('item', 1);
map.set(3, 2);
map.set([1, 2], 3) // 배열을 키로 사용 참조 주소를 알 수 없기 때문에 값을 얻을 수 없음.
map.set(function(){}, 4) // 

console.log(map.size); 
console.log('map([1, 2])', map([1, 2])); // 에러발성
// 배열 객체 변수를 키로 사용
map.set(arr, 5);
console.log('map.get(arr)', map.get(arr)); // 5 반환

// 맵은 "키 - 값"의 추가와 삭제 속도가 일반 객체보다 훨씬 빠르다.
// 따라서  많은 "키 - 값" 구조의 데이터를 빈번하게 추가/삭제하는 데이터를 다루는데 유용하다.

// 키-값 추가 : set(키, 값) - 맵의 참조 주소 반환.
// 키-값 삭제 : delete(키) - 삭제 성공하면 true, 실패하면 false
// 값 얻기 : get(키) - 키가 있으면 값을 반환, 키가 없으면 undefined 반환
// 키-값 전세 삭제 : clear() - undefined 반환.
// 키가 있는지 확인 : has() - 키가 있으면 true, 없으면 false반환

// 맵의 순환
const map = new Map(); // 맵 인스턴스 선언
map.set('itema', 1)
map.set('itemb', 2)
map.set('itemc', 3)
console.log('길이: ' + map.size); //파라메터로 키-값을 각각 받아 순환
map.forEach(function(value, key){
  console.log(key + ': ' + value);
})
//키만 순환
for(let key of map.keys()){
  console.log('key: ', key);
}
//값만 순환
for(let value of map.values()){
  console.log('value: ', value);
}


// 맵 <-> 배열 상호 전환하기
// 맵을 배열로 변환할때 , 또는 배열을 맵으로 변환할 때는 배열의 구조가 [[키, 값],[키, 값]...]과 같은 중첩 배열 구조로 고정됨.
// 맵과 배열의 전환

let friends = [['프로도', 3], ['라이언', 5], ['어피치', 4]];
let frMap = new Map(friends); // 중첩배열을 맵 인스턴스에 넣으면 자동으로 키-값으로 된 맵이 생성된다.
let newFriends = Array.from(frMap); // 생성된 맵을 배열 메서드인 from()인자로 넣어 배열을 생성하면 원본 배열과 같은 배열을 다시 만들수 있다.

//frMap 맵 순환
frMap.forEach(function(value, key){
  console.log(key+ ', ' +value);
})
// 재생성 배열
console.log('newFriends', newFriends);

// 맵은 잦은 데이터 갱신이나 검색이 있는 대규모 데이터 처리에 적합하도록 만들어진 객체 타입이다.
// 배열이나 일반 객체의 검색, 또는 데이터 갱신 지점을 찾는 순환시에는 순차 검색을 한다.
// N개의 (키 - 값)을 가진 일반 객체의 경우 평균 검색 시간은 N/2시간이 된다.
// 그에 반해 맵은 검색에 log(N)의 시간이 소요된다. 내부적이 브라우저 구현에 따라 다르지만, 
// 대부분 브라우저는 맵의 검색을 위해 바이너리 서치 트리, 또는 B트리라는 검색 트리 구조를 사용하고,
// 순차 검색에 비해 월등히 빠른 검색 시간을 나타낸다.

// 데이터 개수가 많을 수록 시간 차이는 더 크게 벌어지며, 
// "키-값"구조의 대규모 데이터 처리를 할 경우 반드시 맵으로 셋(Set) 또한 해시 테이블을 사용한다.