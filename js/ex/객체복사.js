// 객체의 복사
// 객체 변수는 객체 리터럴로 선언한 객체를 참조하는 참조 주소의 역활을 한다.

// 객체 리터럴로 originalObj 변수에 객체를 할당하면

let originalObj = { name : "ryon", age: 5, changeAge(){
  this.age += 1;
}}

// "originalObj" 변수는 객체의 참조 주소 만을 담고 있는 참조 변수의 역활을 하게 됩니다.
// 객체 참조 변수를 다음과 같이 대입해 새 변수에 할당하면

let referenceObj = originalObj;

// "referenceObj" 변수는 같은 객체 참조 주소를 복사해 가지게 된다.
// 객체가 복사되는게 아니라 참조 주소만 복사하며, referenceObj.age와 originalObj.age는 같은 객체의 속성을 가리킨다.

referenceObj.age = 6;

// 으로 객체의 속성값을 변경하면, originalObj.age도 6이 된다.
// 객체를 복사하려면 전역 객체 메서드인 "assign()"을 사용할 것.

let objObj = Object.assign({}, originalObj);
// 빈 객체 "{}"와 원본 객체를 파라메터로 넘기면, 복사된 새 객체가 반환된다.
// 반환된 객체를 새 변수에 담으면 원본 객체의 모든 속성이 복사된 새 객체를 사용 할 수있다.

copyObj.age = 7;

// 복사된 객체의 age 속성을 변경하면 복사된 객체의 age 값은 7으로 변경되지만, 원본 객체인 "originalObj.age" 값은 5로 그대로 유지된다.


//******//
let originalObj = {name: "ryon", age: 5, changeAge(){this.age += 1;}};
let referenceObj = originalObj;
referenceObj.age = 6; // originalObj의 age 속성 값 변경
console.log('originalObj.age', originalObj.age);

let copyObj = Object.assign({}, originalObj);
copyObj.age = 7; // originalObj의 age 속성 값 변경 없음
console.log(originalObj.age)