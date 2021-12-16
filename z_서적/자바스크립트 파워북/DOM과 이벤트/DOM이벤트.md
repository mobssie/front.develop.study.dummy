## DOM 이벤트
분리된 자바스크립트 코드로 이벤트의 생애주기를 모두 관리하는 코딩 방법.

### 이벤트 등록
모든 자바스크립트 이벤트 처리는 "addEventListener()"함수로 부터 호출

자바스크립트로 이벤트 처리를 하려는 경우, 가장 먼저 "addEventListener()"함수로 HTML 엘리먼트 노드에 이벤트를 등록한다.

"addEventListerener()" 함수구조.
```javascript
cosnt ref = docuemnt.addEventListerener('이벤트타입', function(e){
  // 이벤트 콜백 처리
})
```
이벤트 타입: 사용자가 발생시킨 웹 페이지 안에서 액션. 마우스를 클릭햇으면 "click", 키보드를 눌렀으면 "keydown"과 같이 이벤트 종류를 나타내는 키워드를 사용한다.

콜백 함수: 이벤트가 발생하면 실행하는 함수이다. 파라메터로 이벤트 객체를 전달하며, 이벤트 객체에 이벤트를 발생시킨 HTML 요소와, 다양한 이벤트 정보가 들어 있다. 콜백함수는 익명함수로 작성할 수도 있지만, 이벤트를 삭제할 때 함수명을 필요로 하므로 가능하면 별도의 함수로 작성하고, 함수명을 인자로 넣는것을 추천!

예를 들어 
```javascript
let btn = document.querySeletor('#btnsave');
btn.addEventListerener('click', function(e){
  console.log(e.target.value+' clicked');
});
// 또는
function callbackFunc(e){
  console.log(e.target.value+' clicked!')
}
btn.addEventListerener('click', callbackFunc)
```
버튼 엘리먼트에 클릭이 발생하면 콜백 함수가 실행되도록 할 수 있다.

### 등록 옵션 추가
"addEventListerener()"함수는 파라메터로 옵션을 추가할 수 있다.
옵션 설정 파라메터는 인터넷 익스플로러에서는 지원되지 않는다.
웹 브라우저 호환성이 필요한 경우 옵션 설정은 사용하지 말아야 한다.

capture:  true/false로 설정. 기본값 false. 이벤트를 **캡쳐링(Capturing)**방식으로 전파(Propagation)할지를 결정.
이벤트 캡쳐링과 버블링에 대한 이해가 필요하므로 이벤트 캡쳐링과 버블링에 대한 내용을 알야아 한다.

capture 옵션은 옵션 객체 대신, 단독 옵션 파라메터로 불리언(true/false)값을 전달할 수 있다.

예를들어 
btn.addEventListerener('이벤트 종류',콜백 함수, true);

once: 이벤트가 한번만 호출되고 등록한 이벤트 리스너가 삭제된다. 한번 사용 후 폐기해야 하는 경우 추가의 이벤트 삭제 처리를 하지 않아도 된다.

passive: 기본 값 "false", "true"인 경우 콜백 함수에서 "preventDefault()"(이벤트 취소 및 타겟의 기본 동작 차단)메서드를 사용할 수 없다. 이벤트에 의해 스크롤이 블럭(block)되는 것을 막아주며, 주로 모바일 브라우저의 스크롤 성능 향상을 위해 추가된 옵션.
```javascript
btn.addEventlisterener('이벤트 종류', 콜백함수, 이벤트 옵션 객체);
// 예를들으

const options = {capture: false, once, passive: true}; // 옵션 객체 생성
// 콜백 함수
clickFunc = function (e) {
  console.log(e.target.value+ ' clicked!');
}
btn.addEventListerener('click', clickFunc, options);
```

**!주의**
제이쿼리 라이브러리를 이용해 HTML로딩 완료된 시점을 체크하는 방법은 $(document).ready (function(){})
이 메서드는 자바스크립트의 document.addEventListerener('DOMContentLoaded', function(){})과 같다.
"DOMContentLoaded" 이벤트 대신 "load"이벤트를 사용하면 포함된 리소스까지 모두 로딩이 완료된 후 이벤트가 호출된다.





### 등록 가능한 이벤트
자바스크립트에서 등록할 수 있는 이벤트 종류는 수 백가지.
요약본

----------------
#### DOMContentLoad
타입: 이벤트
대상: DOM
발생시점: DOM트리가 완성된 직후.(렌더링 전) HTML만 로딩 완료된 상태
----------------
#### load
타입: UI이벤트
대상: 도큐먼트, 엘리먼트
발생시점: 리소스와 그 외 리소스 의존 리소스가 모두 완료 되었을때
----------------
#### reset
타입: 이벤트
대상: 폼
발생 시점: 폼 리셋 버튼 클릭
----------------
#### submit
타입: 이벤트
대상: 폼
발생 시점: 폼 전송 버튼 클릭, 또는 전송 이벤트 발생
----------------
#### resize
타입: UI이벤트
대상: 도큐먼트뷰
발생 시점: 브라우저 크리 변경
----------------
#### scroll
타입: UI이벤트
대상: 도큐먼트뷰, 엘리먼트
발생 시점: 브라우저 화면 스크롤, 또는 엘리먼트 요소 내부 스크롤
----------------
#### focus
타입: 포커스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 엘리먼트가 포커스를 받았을때 (이벤트 버블링 없음)
----------------
#### blur
타입: 포커스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 엘리먼트가 포커스를 잃었을때 (이벤트 버블링 없음)
----------------
#### keydown
타입: 키보드 이벤트
대상: 입력 요소
발생 시점: 입력요소 키보드 키 누름
----------------
#### keypress
타입: 키보드 이벤트
대상: 입력 요소
발생 시점: 입력요소 키보드 키 누름 상태 지속(반복 발생함). Fn, Caps, Lock은 제외
----------------
#### keyup
타입: 키보드 이벤트
대상: 입력 요소
발생 시점: 입력 요소 키보드 키누름 해제
----------------
#### mouseenter
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 엘리먼트 안으로 마우스 커서가 들어옴(들어올 때 1번 발생)
----------------
#### mouseover
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 엘리먼트 위에 마우스 커서가 위치함
----------------
#### mousemove
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 마우스 커서가 이동
----------------
#### mousedown
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 마우스 버튼 누름
----------------
#### mouseup
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 마우스 버튼 누름 해제
----------------
#### click
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 마우스 버튼 클릭
----------------
#### contextmenu
타입: 마우스 이벤트
대상: 엘리먼트
발생 시점: 엘리먼트 컨텍스트 메뉴 표시(오른쪽 마우스 버튼 클릭)





### 이벤트 삭제
이벤트를 삭제하려면 등록한 이벤트 타입과 콜백 함수 이름을 알아야한다. 
*이벤트를 등록할 때 **capture옵션을 사용한 경우** 이벤트를 삭제할 때 반드시 같은 옵션 값을 명시해야한다.*

> 자바스크립트 이벤트 리스너 등록 함수는 capture 옵션을 사용한 경우, 다른 capture옵션 값으로 같은 이벤트와 콜백 함수를 중복 등록할 수 있다. 등록한 이벤트 리스너를 삭제할 때도 각각 구분해 옵션을 적용해 삭제해야 한다.

```javascript
document.removeEventListerener('이벤트 타입', 등록된 콜백 함수, 옵션 객체);
// 예
function callbackFunc(e){
  console.log(e.target.value+ ' clicked');
}
document.addEventListener('click', callbackFunc, {capture: ture}); // 추가
document.removeEventListener('click', callbackFunc, {capture: ture}) // 삭제
// 이렇게 삭제할수 있다. 
```

위에 등록한 이벤트 리스너는 
```javascript
document.removeEventListerener('click', callbackFunc, {capture: false});
document.removeEventListerener('click', callbackFunc, false);
```
와 같은 이벤트 삭제 함수로는 등록했던 이벤트를 삭제할 수 없다. 옵션값을 적용한 경우 반드시 옵션값까지 명시해야 한다.



**이벤트 삭제 함수 별도 반환 값이 없기 때문에 삭제 성공 여부를 알 수 없다.** 이벤트 리스너 등록시 등록한 콜백 함수 명과 옵션 값을 주의해야 한다. 특별히 옵션이 필요 없는 이벤트 등록시에는 이벤트 옵션을 생략하고 사용하는 방식이 등록한 이벤트를 삭제할 때 더 유연하게 대응할 수 있다.