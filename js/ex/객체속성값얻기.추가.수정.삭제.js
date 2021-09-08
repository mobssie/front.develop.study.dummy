let friends = {brand: "카카오", original: [{name: "라이언", age: 5}, {name: "어피치", age: 4}], newbee: {name: '네온', age: 3}}
// 속성값얻기
console.log(friends.original[0]);
console.log(friends.original[1].age);
console.log(friends.original.length);
console.log(friends.newbee.name);

//속성 추가
friends.newbee['sex'] = 'famale';
//객체배열로 변환
friends["newbee"] = [friends["newbee"]], {name: "콘", age:2}
console.log(friends.newbee)
//속성 수정
friends.newbee[0]['sex'] = 'male'; //배열 안의 속성에 접근
friends.newbee.sex = 'unknown'; //없는 속성에 값을 지정. 에러는 발생하지 않음
console.log(friends.newbee);
//속성 삭제
delete friends.newbee[0].sex;
friends.newbee.pop();
delete friends.brand; // delete 연산자로 속성 삭제
console.log(friends)

