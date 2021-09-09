// 자바스크립의 객체는 상속을 지원한다.
// 객체를 상속하면 부모의 모든 속성을 상속하며, 객체 상속으로 효율적인 데이터 구조 관리를 할 수 있다.

// 객체를 상속하려면 create()메서드로 원본 객체를 파라메터로 넣어 원본 객체를 상속한 새 객체를 반환받을수있습니다.

let originalObj = {name: "ryon", age: 5, changeAge(){ this.age += 1;}}
let childObj = Object.create(originalObj);
console.log(childObj.age);
console.log(originalObj)


// 처음 상속받은 자식 객체는 모든 부모 객체의 속성을 참조
// 즉 상속받은 초기 상태에서는 객체의 껍데기만 가지고 있으며, 객체의 각 속성을 참조하는 참조만을 가지고 있음.

// 먼저 부모 객체의 값을 다음과 같이 변경하면 자식 객체는 부모 객체의 속성을 참조하기 때문에 자식 객체는 부모 객체의 변경된 값을 표시한다.


let originalObj = {name:"ryon", age: 5, changeAge(){this.age += 1}}
let childObj = Object.create(originalObj);
originalObj.age = 6;
console.log(childObj.age)
console.log(originalObj.age)

// 반대로 자식 객체의 속성을 변경하면 자식 개게는 부모 객체의 값관는 다른 자신 만의 고유한 속성값을 가지게 된다.
// 즉, 자식 객체는 부모 객체의 모든 속성을 상속하며, 부모 객체의 값을 참조한다.
// 복사가 아니다.

// 자식 객체의 속성 값을 변경하면, 자식 객체는 해당 속성에 대한 자신만의 속성을 가지게 되며, 해당 속성에 대해서는 부모와의 상속 관계가 끊어진다.
// 많은 데이터를 가진 객체의 사본을 만들어 사용할 경우 객체를 상속해서 사용하면 메모리 공간을 만이 절약 할 수 있다.

// 특히, 변하지 않는 대량의 원본 데이터를 참조해 가공된 결과 값 만을 생성해 사용하는 객체를 사용할 경우 굉장히 유용하다.

let originalObj= {name: "ryon", age: 5, changeAge(){this.age += 1}}
let childObj = Object.create(originalObj);
childObj.age = 7; // 자식 객체의 속성이 새로 생기고 값이 적용됨.
console.log('childObj.age', childObj.age);
console.log('originalObj.age', originalObj.age);















