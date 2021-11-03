## URL과 히스토리 제어

### URL 가져오기
현재 페이지의 URL을 가져오는 방법은 2가지.

전역 객체인 location에서 URL정보를 얻을 수 있다. location 객체의 href속성의 현재 페이지의 URL이 들어있다.
`window.location.href`
또는 전역객체 window를 생략해
`location.href`
또는, document 객체의 URL속성의 현재 페이지의 경로 URL을 얻을 수 있다.
`document.URL`

location.hostname : 인터넷 호스트 이름 반환. 현재 도메인을 반환.
location.pathname : 현재 페이지의 경로명 반환. 도메인 밑의 전체 경로를 반환.
location.protocol : 프로토콜 반환. "https:", "http:"중 하나를 반환한다.
location.port : 접속 포트번호 반환. 기본 포트(80, 443) 포트인 경우 빈 문자열이 반환. 비정규 포트로 접속한 경우에만 포트 번호가 반환된다. 포트 체크시에는 location.protocol을 추가로 체크해야한다.
location.search : "?"뒤의 쿼리 스트링 문자열을 반환. 쿼리 스트링 값을 얻기 위해 사용.

### URL 파싱
앵커 태그를 동적으로 생성해서 URL을 할당하는 방법으로 문자열로 된 URL의 속성들을 읽을 수 있다. 

#### URL정보를 담은 앵커 태그를 반환하는 프로토 타입 메서드로 간단하게 구현 (URL 파싱의 예)
```javascript
Location.prototype.getURLInfo = function(url) {
  let info = document.createElement(a);
  info.href = url;
  return info;
}
let info = location.getURLInfo('https://apost.kr:8080/api/?key=1234&cmd=url#info');
console.log(info.protocol) // https://
console.log(info.host) // apost.kr:8080
console.log(info.hostname) // apost.kr
console.log(info.port) // 8080
console.log(info.pathname) // /api/
console.log(info.hash) // #info
console.log(info.search) // ?key=1234&amp;cmd=url
console.log(info.origin) // https://apost.kr:8080
```


### QueryString 정보 얻기
Location객체에 프로토타입 메서드를 정의해서 전역으로 가져다 쓸 수 있도록 간단한 메서드를 만들 수 있다. 전역 location 객체에 프로토타입으로 파라메터를 얻는 함수를 하나 정의해서 전역으로 사용할 수 있다.

```javascript
window.addEventListerener('load', function(){
  window.location.getParams = function(){
    let params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value)=>{params[key] = value;}) // 대소문자 구분 없이 쿼리 스트링을 키-값으로 분리하는 정규 표현식
    return params;
  }
  let info = location.getParmas();
  console.log(info)
})

// {cmd: "userinfo", level: "9"}
```
> 함수는 JSON 객체를 반환하기 때문에 반환반은 객체를 사용해 파라메터 항목별로 값을 확인할 수 있다.

location객체는 윈도우 객체의 하위 객체이다.
location 객체에 접근하기 위한 이벤트 리스너를 등록할 때는 document 객체가 아닌 window 객체에 이벤트 리스너를 추가해아 한다. 또한, location 객체는 페이지 리소스가 모두 로딩된 후 접근이 가능해지기 때문에 이벤트 타입으로 "DOMContentLoaded" 이벤트가 아니라 "load" 이벤트에 리스너를 등록 해야한다.
*!주의 window 객체에 사용자 정의 메서드를 추가할 때는 prototype 키워드를 사용하면 안된다.*
*새로운 객체를 가상으로 정의하는 일반적인 프로토타입 메서드 추가와 달리 윈도우 객체는 프로토 타입 객체가 아니기 때문에 "window.getParams = function(){};"과 같이 일반 메서드 추가 방식으로 메서드를 추가해야 한다.*

### URL 변경과 페이지 이동
페이지를 이동하는 가장 기초적인 방법은 
`location.href = '이동할 URL'`

location.href로 URL을 지정하면 이동하려는 URL로 즉시 이동할 수 있다. 도메인이 같은 경우 "/"로 시작하는 하위 경로만 입력해도 된다. "/"로 시작하지 않은 하위 경로는 형재 페이지의 URL위치를 기준으로 상대 하위 경로로 이동.

"location.assign()"는 "location.href"의 메서드 구현체이며 파라메터로 URL을 사용한다. 
**"location.assign(URL)"과 "location.href = URL;" 은 동일한 동작**을 한다. 
어떤 것을 사용해도 무방하지만 "location.href"가 압도적으로 많이 사용된다.

**"location.reload()"은 현재 페이지를 다시 로딩한다. "history.go()", "history.go(0)"와 같다.**



### 히스토리 이동
방문 기록을 담는 히스토리(History)객체는 전역 객체로 "window.history"로 접근할 수 있다.
히스토리 객체는 과거 방문했던 페이지를 탐색 이동하는 몇 가지 메서드를 제공.
히스토리 메서드는 방문한 이전 페이지 목록을 기초로 페이지를 이동한다. 히스토리 목록에 없는 페이지로는 이동을 할 수 없다.

history.go()
- 방문한 페이지들을 자유자재로 이동할 수 있다.
- 파라메터로 정수를 받아들여 이전 방문한 페이지로 바로 이동할 수 있다.
- 파라메터 없음, 또는 0 : 현재 페이지 다시 로딩. location.reload()와 같음.
- -1 : 현재 페이지의 이전 페이지
- -2 : 현재 페이지의 전전 페이지
- 1 : 현재 페이지의 앞 페이지(히스토리의 이전 페이지들로 이동한 경우)

history.forward() : 현재 페이지의 앞 페이지. history.go(1)과 같음.
history.back() : 현재 페이지의 뒷 페이지. history.go(-1)과 같음.


### 히스토리 남기지 않기
웹서비스를 구현하다 보면 뒤로 가기로 접근할 수 없도록 막을 필요가 있는 페이지들이 있다.
히스토리 자체는 개별적으로 삭제할 수 있는 방법이 없으며, 히스토리가 남지 않도록 하는 방법이 유일하다.
이런 경우, "location.href"가 아닌 "location.replace()"로 페이지를 이동하면 된다.
---
location.href
타입 : 속성, location.href = URL;
실행방법 : 페이지를 이동
히스토리 : 남음
임시파일 : 남음
---
location.replace()
타입 : 메서드, location.replace(URL);
실행방법 : 현재 페이지를 대체함
히스토리 : 남기지 않음
임시파일 : 남기지 않음
---