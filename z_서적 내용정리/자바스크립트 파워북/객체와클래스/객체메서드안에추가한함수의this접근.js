let obj = {}; // 빈 객체 생성
// 객체 메서드 act()생성
obj.act = function(){
  this.value = 'default value'; // 객체에 value 변수 값 설정

  //객체 메서드 act() 생성
  function innerAct(){
    this.value = 'innerAct value'; // 전역 객체 value 변수에 값 할당
    console.log('this.value', this.value); // 전역객체를 참조함
  }

  // 객체 참조를 넘기는 act() 메서드 안의 추가함수
  function innerReact(caller){
    caller.value = 'innerReact value'; //obj 객체의 value 변수에 값 할당
    console.log('this.value', this.value); // undefined 반환. 전역 객체의 value 변수를 참조함.
    console.log('caller.value', caller.value); // "innerReact value"반환. obj객체의 value 참조
  }

  innerAct();
  console.log('obj 객체의 this.value', this.value );

  innerReact(); // 객체 참조를 파라메터로 넘김
  console.log('obj 객체의 this.value', this.value );


}