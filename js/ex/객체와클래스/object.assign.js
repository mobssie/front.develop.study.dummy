// 객체의 복사
// 원본 객체(두개의 파라메터 중 두번째 파라메터)의 사본 객체를 생성해 반환

// 첫번째 파라메터는 빈 객체를 넣게 된다. 빈 객체와 원본 객체를 병합하는 것으로 이해하면됨.

let objSource = {item: "라이언", item2: "어피치"}
let objClone = Object.assign({}, objSource);

console.log('objSource', objSource)
console.log('objClone', objClone);


// 객체의 기본 값 설정

// assign() 메서드는 객체를 병합한다.
// 1. 업는 속성은 추가된다
// 2. 중복되는 속성은 원본 객체(두 번째 파라메터)의 속성 값으로 덮어쓴다.Object
// 쇼핑몰 이용자가 장바구니를 비운다거나, 선택한 항목들을 초기화하고 처음부터 다시 선택한다거나 하는경우 assign()메서드의 이런 특성을 활요할 수 있다.


// 중복된 객체의 복사

// assign() 메서드로 객체를 복사할 때 객체 속성에 하위 객체가 정의된 경우 객체가 복사되는게 아니라 객체의 참조만 복사된다.
// 이것은 배열을 복사할 때도 마찬가지이며, assign()을 사용할 때 반드시 주의해야 한다.

let objSource = {item1: "라이언", item2: "어피치", item3: {group: "friends", age: 3}}
let objClone = Object.assign({}, objSource);

objSource.items1 = "무지";
objClone.items1 = "콘";
objSource.items3.age = 5; // 원본 객체의 3번째 속성 값인 하위 객체의 age 속성값 변경
console.log(objSource)
console.log(objClone)






















