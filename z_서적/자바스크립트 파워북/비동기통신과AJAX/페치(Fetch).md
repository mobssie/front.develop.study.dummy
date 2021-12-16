## 더 간편한 프로미스 구현을 위한 패치(Fetch)

- 일종의 프로미스 래퍼(Wrapper:재포장)라고 이해하면 쉽다.
- 페스메서드는 프로미스 인스턴스를 반환한다.
- 프로미스 인스턴스를 생성할 필요 없이 패치 메서드 파라메터에 비동기 요청 URL만 넘기면 프로미스 인스턴스가 반환되기 때문에 기존 프로미스의 then~catch로 순차 처리를 할 수 있게 된다.

```javascript
fetch.('https://request.com/api/data.json').then((response)=>{
  console.log(response);
}).catch((err)=>{
  console.log(err)
})
```
**프로미스 객체를 생성하면서 비동기 요청 코드를 작성할 필요 없이, 요청 패치(Fetch)메서드로 보내면 생성된 프로미스 객체 인스턴스가 반환되면서 이행 완료 상태인 경우 then()을 호출**
- 패치는 비동기 요청이 완료되지 못하면 경우에만 거부 상태가 반환되고, catch()가 호출된다.
그 이외의 모든 경우는 이행 완료로 처리되며 then()을 호출.
HTTP 상태가 에러 (500), 페이지 없음(404)에러도 모두 이행이 완료된 것으로 간주하며, then()콜백 함수 안에서 상태(Response, status)를 확인해 그에 맞는 처리를 별도로 해야한다.
```javascript
if(Response.status >= 200 && Response.status <= 299){
  // 정상완료
} else {
  // 에러발생
}
```

### 패치 요청(Request) 옵션 적용
`fetch(url, {method: 'GET', cache: 'no-cache'}).then(res=>{console.log(res)})`

|옵션        |사용 가능 값|기본 값|
|-----------|:---|:---|
|method     |GET,POST,PUT,DELETE                                  |GET|
|mode       |cors, no-cors, same-origin                           |same-origin|
|cache      |default, no-cache, reload, force-cache, only-if-cache|default|
|credentials|same-origin, omit, include *자격증명에 필요한 인증서를 보내려면 "include"를 사용하고, 자격 증명을 배제하려면 "omit"을 사용.                                    | same-origin|
|headers    |'content-Type'으로 적용. 적용값은 application/json, application/x-www-form-urlencoded, text/plain                                 | text/plain |
|redirect   |follow, manual, error                                | follow     |
|referrer   |client, no-referrer                                  | client     |
|body       |BLOB, JSON, 텍스트, 폼 데이터, 버퍼 배열 타입의 문자열, 또는 객체|"header"옵션에 Content-Type을 적용한 경우 같은 타입의 데이터여야함. 예를들어 JSON은 객체로 보낼 수도 있지만, headers 옵션에서 "text/plain"으로 지정한 경우 JSON.stringify(data)메서드로 문자열로 변환해서 적용해야 한다.

```javascript
fetch(saveurl, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
  body: new FormData(document.getElementById('myform'))
}).then(response => console.log(response));
```

### 패치로 파일 업로드 하기
**"body"옵션에서 문자열 데이터 또는 객체를 붙일 수 있기 때문에, 폼 객체를 생성해 파일을 업로드**
```javascript
var fobj = new FormData(); // 폼 인스턴스 생성
var file = document.querySelector('input[type="file"]') // 업로드할 파일 정보 얻기
fobj.append('photo', file.files[0]); // 파일데이터 폼 인스턴스 넣기
fetch('https://request.com/bb/upload', {
  method: 'POST',
  body: fobj
})
.then(response => console.log(response + ' saved!'))
.catch(error => console.log(error))
```