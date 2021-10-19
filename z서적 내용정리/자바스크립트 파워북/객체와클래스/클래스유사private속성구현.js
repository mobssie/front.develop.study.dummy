// 클래스 유사 private 속성 구현 예시
// 속성 기술자(Getter/Setter)
// Setter속성만 추가하고 Getter속성을 작성하지 않으면 Object.eat로 속성값에 접근할 수없다.
// 단, Setter로 생성한 내부저장용 "food" 변수 자체는 public 속성 변수이기 때문에 변수명을 직접 접근할 수는 있다.
// Obejct.eat으로는 접근불가능, Object.food로는 접근가능.
class Food {
  constructor(){
    // constructor에서 지정한 속성은 모두 public 속성이 됨.
  }
  set eat(food){
    this.food = food;
  }
  get eat(){
    return this._food;
  }
}

let breakfast = new Food();
breakfast.eat = 'noodle';
console.log(breakfast.eat);
console.log(breakfast.food);