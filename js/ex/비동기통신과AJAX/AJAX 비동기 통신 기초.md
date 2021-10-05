## AJAX 비동기 통신 (XMLHttpRequest)

- AJAX, XMLHttpRequest는 **비동기 방식**으로 데이터를 주고 받기 위해 개발된 자바스크립트 기술
- AJAX : Asynchronous Javascript and XML
- JSON, HTML, XML 데이터를 주고 받는 웹 비동기 기술.
- XMLHttpRequest 객체는 서버로 요청을 보내고 요청을 받은 결과를 비동기로 처리한다. 따라서 요청을 보낸 후 사용자는 UI화면과 상호 작용을 하거나 다른 AJAX요청을 추가로 보낼 수 있다.
- 서버에서 응답이 오면 AJAX요청을 보낼 때 등록했던 콜백함수를 통해 결과 데이터를 처리하게 된다.

```javascript
const ajax = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos/1';
ajax.onload = function(){ // 로딩 완료시 실행하는 콜백 함수 정의
  if(ajax.status >= 200 && ajax.status < 300){ // 결과가 성공인지 상태 체크
    successCallback(ajax.response);
  } else {
    errorCallback(new Error(ajax.statusText));
  }
};
ajax.onerror = errorCallback; // 에러 발생시 실행하는 콜백 함수 지정
ajax.open('GET', url);
ajax.setRequestHeader('Accept', 'application/json');
ajax.send();
function successCallback(response){
  console.log('response:'+response);
}
function errorCallback(err){
  console.log('error:'+err.message)
}
```

1. 먼저 XMLHttpRequest 객체를 생성
- const ajax = new XMLHttpRequest();

2. 접속할 원격 URL을 담은 변수를 하나 만든다. 
- const url = 'https://jsonplaceholder.typicode.com/todos/1';

3. AJAX요청에 대한 응답 (onload)을 처리하는 콜백 함수를 작성해 XMLHttpRequest객체의 onload이벤트에 적용.
함수에서는 XMLHttpRequest의 상태 정보를 기준으로 응답 상태 값이 200 ~ 299이면 정상 결과 값이 돌아온 것으로 판단해 성공시 처리하는 함수를 호출
그렇지 않으면 에러 정보를 담은 객체를 생성해 에러 처리 함수의 파라메터로 넘김.
```javascript
ajax.onload = function(){
  if(ajax.status >= 200 && ajax.status < 300){
    successCallback(ajax.response);
  } else {
    errorCallback(new Error(ajax.statusText));
  }
};
```


4. 에러 이벤트 발생시 처리할 에러 콜백 함수명을 적용. 에러 처리용 공통 함수를 만들어서 같은 함수를 적용하면된다.
```javascript
ajax.onerror = errorCallback;
function errorCallback(err){
  console.log('error:'+err.message)
}
```
5. open()메서드로 비동기 연결을 시작. 소스의 URL로 접속하면 바로 JSON결과가 표시되기 때문에 GET방식으로 연결.
ajax.open('GET', url);

6. 요청 헤더 값을 설정. 받은 데이터 포맷이 JSON이므로 'application/json'을 수식 포맷으로 설정.

7. send()메서드를 호출해 전송을 시작한다. 서버에 응답 요청이 전달되고 서버의 응답(결과 JSON데이터)이 회신
ajax.send();
8. 콘솔창에 응답 JSON데이터가 표시되는지 확인한다.
결과가 성공일 경우 XMLHttpRequest객체의 response에 응답 데이터가 담겨서 돌아온다. 응답 성공시 처시하는 콜백 함수 파라메터로 응답 객체 ajax.response를 넘긴다.
```javascript
// 성공 처리함수
function successCallback(response){
  console.log('response:' + response)
}
```
AJAX로 받은 응답을 기초 HTML페이지에 태그를 생성해 붙여 넣거나 하는 경우 HTML DOM이 생성된 후 실행되야 한다.
```javascript
document.addEventListener('DOMContentLoaded', function(){
  // AJAX 요청 및 응답 처리
});
```


**XMLHttpRequest 객체를 이용한 비동기 통신은 서버 쪽에서 원격 요청에 대한 허용을 한 경우에만 요청에 대한 응답데이터를 받을 수 있다.**
- 서버에서 원격 요청에 대한 차단 정책을 사용하는 경우 다음과 같은 CORS에러를 발생시키고, 접속이 차단된다.