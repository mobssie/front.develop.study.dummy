// 클래스 유사 private 속성 구현 예시

class Food {
  constructor(){

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
