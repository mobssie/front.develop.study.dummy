// 모듈의 이해
// 기능 단위로 제작한 자바스크립트 코드를 연결해 하나의 앱을 구성하는 기본 방식

// 모듈의 특정 기느을 하는 하나의 코드 묶음 단위
// 모듈이 모여 하나의 큰 프로그램이 되며, 모듈은 또 다른 모듈의 일부로써 기능을 할 수 있다.

// 모듈의 핵심은 "캡슐화"이다.

// 모듈 안의 모든 기능들은 모듈 안에서 동작하며, 모듈 밖에서는 접근이 허용된 속성이나 메서드만 사용할 수 있도록 허용된다.

// ES5까지는 모듈에 대한 지원이 되지 않았기 때문에, 모듈 비슷한 구조를 즉시 실행 함수를 이용해 구현했다.

// 모듈의 기본구조 예 : 즉시 실행함수를 이용해 객체를 반환 받아서 모듈처럼 구현
let module = (function(){
  let _str = '모듈변수';
  return {
    myfunc: function(){
      return _srt;
    }
  }
})();
console.log('module.api()', module.api());




// 반환받은 객체는 myfunc 메서드를 호출할 수 있으며, 클로저이기 때문에 _str변수에 접근할 수 있다.
// 따라서 "module.myfunc()"를 실행하면 "모듈변수" 문자열을 반환받게 된다.


//*** */
////////////////////////////app.html
<script type="module" src="./main.js"></script> // msg:module run!
////////////////////////////main.js
import {module} from './module.js'
module('module run!')
////////////////////////////module.js
export function module(msg){
  console.log('msg: ' +msg);
}
//*** */




// 모듈은 임포트해서 가져오는 것은 모듈의 참조주소를 가져오는 것이지 모듈의 값을 가져오는 것이 아니다
// 자바스크립트의 모든 객체와 마찬가지로 모듈도 하나의 객체로서 임포트 시점에 그 모듈 객체의 참조 주소를 변수에 할당하는 것
// 따라서, 모듈 안에서 일어나는 값의 변경 또한 모듈 안에 그대로 반영되어 있게 되고, 모듈을 가져온 코드에서는 변경된 값을 참조만 하는 것

// export 키워드로 내보낼수 있는 모듈은 var, let, const, function, class
// export 키워드는 최상위로 정의한 var, let, const, function, class만 내보낼수있다.

// 모듈환경을 작성해 테스트를 할때에는 반드시 서버 환경이 필요하다. 로컬호스트환경 또는 웹서버를 통해 실행되는 환경에서만 모듈이 로드되고 실행된다.
// 웹브라우저에서 html파일을 직접 열어서 자바스크립트 모듈을 임포트 하는 방식으로는 모듈을 가져올 수 없다.

// 모듈의 반환 기본 값 설정
// 모듈에 정의한 여러개의 변수, 함수, 클래스, 객체 중 기본으로 내보낼 값을 default키워드를 사용해 지정할수있다.

////////////////////////////main.js
import defaultmodule from './module.js'
defaultmodule();
////////////////////////////mymodule.js
export const moduleA = 'moduleA';
export default function moduleA(){
  console.log('moduleB', moduleB);
}

// default 키워드는 변수에 사용할 경우 변수 지시자(const, let, var)는 사용할 수 없으며 모듈당 1개만 사용할 수 있다.
// default 키워드로 익스포트한 함수, 클래스, 변수 등은 1개만 임포트 하기 때문에 원하는 이름을 사용할 수 있지만, 중괄호로 임포트하는 이름을 감싸면 안된다.
// default 키워드 없이 여러개의 함수, 클래스, 변수를 익스포트 한 모듈을 단일 이름으로 임포트하면 다음과 같은 에러가 발생한다.
// Uncaught SyntaxError: The requsted module ".mymodule.js" does not provide ad export named "default"

// 문자열이나 숫자 등 단일 값을 익스포트 할 경우 상수/변수 선언자(var, const, let)와 변수명을 사용할 수 없다.
// export default 'moduleA';로 익스포트를 해야한다.

// 모듈이름의 재정의
// 모듈 이름은 의존 관계인 모든 모듈에서 유일해야한다.
// 공개된 수 많은 모듈 이름들 사이에 중복이 없을 수 없기 때문에 모듈을 가져오는 시점에 모듈 이름을 재정의할 수 있는 방법을 제공
// import {myModule as newModule} from './myModule.js';
// as 키워드를 사용해 오른쪽에 새로운 이름을 지정함으로써 새이름으로 모듈을 접근할수있다.





// 여러 모듈을 하나의 파일에 작성하기
// 짧은 모듈이나 관련된 모듈들을 모아서 하나의 라이브러리처럼 머돌을 모아서 사용할 수 있다.
////////////////////////////mymodule.js
export const moduleA = 'moduleA';
export function moduleB(){
  console.log('moduleB', moduleB);
}
export class moduleC {
  constructor(){
    console.log('moduleC', moduleC);
  }
}
//// 모듈 사용의 예
import {moduleA, moduleB, moduleC} from './mymodule.js';
console.log('moduleA', moduleA); //moduleA
moduleB(); //moduleB
const moduleC = new moduleC(); //moduleC

// 사용하지 않은 모듈을 제외하고 싶은 경우, 모든 모듈을 로딩할 필요 없이 필요한 모듈만 임포트해서 사용할수 있다.
// *로 모든 모듈을 불려올 경우 반드시 새 모듈 이름을 지정
import * as myModule from "./mymodule.js";
// 이렇게 임포트한 모듈은
console.log(myModule.moduleA);
myModule.moduleB();
const modulec = new myModule.moduleC(); 
// 와 같이 사용이 가능하다.



/// 모듈을 다른 자바스크립트 파일에서 쓸 수 있게 내보내는 경우 각각의 변수, 함수, 클래스에 export 키워드를 사용하는 방법 말고, 자바스크립트 끝에 일관ㄹ로 내보내는 방법도 있다.
////////////////////////////mymodule.js
const moduleA = 'moduleA';
function moduleB(){
  console.log('moduleB', moduleB);
}
class moduleC {
  constructor(){
    console.log('moduleC', moduleC);
  }
}
export {moduleA, moduleB, moduleC};
// 와같이 묶어서 익스포트 할 수도 있다.