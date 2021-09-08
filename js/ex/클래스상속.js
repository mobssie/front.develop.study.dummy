// extents 상속받을 클래스를 지정하는 지시자
class Person {
  constructor(firstname, lastname, age, gender){
    this.name = {first:firstname, last:lastname}
    this.age = age;
    this.gender = gender
  }
  getAge(firstname, lastname){
    return this.age;
  }
  getGender(firstname, lastname){
    return this.gender
  }
}
// person을 상속받아 Teacher 클래스 생성
class Teacher extends Person {
  constructor(firstname, lastname, age, gender, subject){
    super(firstname, lastname, age, gender); // 부몽 클래스 Person의 생성자 호출
    this.subject = subject;
  }
  getSubject(firstname, lastname){ //자식 클래스 Teacher 전용의 추가 메서드 정의
    return this.subject;
  }
}
//Person을 상속받아 Student 클래스 생성
class Student extends Person {
  constructor(firstname, lastname, age, gender, grade){
    super(firstname, lastname, age, gender);// 부모 클래스 Person의 생성자를 호출
    this.grade = grade;
  }
  getGender(firstname, lastname){ // 자식클래스 Student 전용의 추가 메서드 정의
    return this.grade;
  }
}

let teacher = new Teacher('라', '이언', 5, 'male', 'math');
let student = new Student('어', '피치', 4 , 'famale', 3)

console.log(teacher.getSubject('라','이언')); // 'math' 반환
console.log(student.getAge('어','피치')); // 4반환
console.log(student.getSubject('어','피치')); // 자기 자신과 부모 클래스에 없는 메서드 호출로 에러 발생





