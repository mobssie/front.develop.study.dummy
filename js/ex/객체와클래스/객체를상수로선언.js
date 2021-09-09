// 객체를 상수로 선언
// const는 변수의 값을 변경할 수 없도록 선언하는 변수 선언자이다.

// 언뜻 객체를 const로 선언하면 객체 속성의 값을 변경할 수 없게 될 것 같지만 
// 실제로는 그렇지 않다.

// 객체를 const 로 선언하면 다른 객체를 재할당 할 수 없을 뿐 객체 속성의 값을 변경하는데 아무런 제한이 없다.

// 객체의 속성값을 변경할수없게하려면 객체 메서드인 freeze()를 사용해야한다

Object.freeze(arr);

// Freeze 메서는 모든 객체에 적용 할수있다.
// 배열에서도 동일한 효과를 나타낸다.

let obj = {name: 'mobssie', age: 5, changeAge(){ age += 1}}
Object.freeze(obj);
obj.age = 7; 
console.log('obj.age', obj.age);