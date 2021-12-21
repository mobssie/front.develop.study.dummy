## DOM 제어의 시작점 DOMContentLoaded 이벤트

**DOMContentLoaded**
브라우저가 HTML 문서를 이럭어서 파싱 한 후 DOM(Document Object Model)이 완성되었으므로, 자바스크립트를 이용해 HTML 문서의 구조와 데이터에 접근할 수 있게 되었다는 뜻.
DOM 완성 후 웹 브라우저는 이 DOM을 이용해 화면에 웹페이지를 그리게 된다.
이 과정을 렌더링(Rendering)이라고 하며, "DOMContentLoaded"는 **DOM 완성 후 렌더링 시작 전 중간 어디쯤 진행이 되고 있는 것**을 의미.

더 정확히는 HTML DOM 완성 후 CSS 파일이 있으면 CSS 파일을 읽어 파싱 한 후 CSSOM 생성, 그리고 렌더링 과정에 들어가면서 렌더 트리(Render Tree)를 생성.

기술적으로 복잡한 메커니즘이 있지만, 우리는 *"DOMContentLoaded"이벤트가 생성 완료 직후 발생하며 화면에 HTML 페이지가 렌더링 되기 전이나 후이고, 자바스크립트를 이용해 DOM에 접근해서 제어할 수 있다는 것.*

```javascript
document.addEventListerener('DOMContentLoaded', function(){
  // 여기에 DOM제어에 필요한 코드와 실행할 함수를 호출
})
```
"DOMContentLoaded" 이벤트가 호출 되면 DOM을 제어할 수 있으므로, AJAX를 이용해 비동기로 여러가지 데이터를 가져와 가공한 후, HTML 문서 안에 배치를 하거나 갱신을 해서 문서를 완성하거나, 레이아웃 배치를 바꾸는 등의 다양한 작업을 진행할 수 있다.

"DOMContentLoaded" 이벤트 처리 함수가 종료되면 웹 브라우저는 갱신된 DOM을 사용해 렌더 트리를 생성하게 된다.

```javascript
document.addEventListerener('DOMContentLoaded', function(){
  // 현재 예매 가정한 티켓 정보를 비동기(AJAX)로 가져오기
  var json = getAjaxTicketInfo();
  updateTicketInfo(json);
})

function getAjaxTicketInfo(){
  // AJAX로 티켓정보 가져오기
}

function updateTicketInfo(infos){
  // DOM 업데이트
}
```


등록하려는 이벤트 리스너를 "DOMContentLoaded"이벤트 리스너 바깥에 정의한 경우, DOM 생성 전일 경우 다음과 같은 에러가 표시 된다.
> Uncaught TypeError: Cannot read property 'addEventListerener'