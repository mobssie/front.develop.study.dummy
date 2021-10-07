## HTTP 응답상태 코드

---
100 : Countinue
- 서버에서 요청의 일부만 수신함. 거부되기 전까지 클라이언트는 요청을 대기함.
101 : Switching Protocols
- 서버가 프로토콜을 변경함.
---
200 : OK
- 요청 완료.
201 : Created
- 요청 완료 되었고, 새 리소스가 생겨남.
202 : Accepted
- 요청 처리가 승인되었지만 처리는 완료되지 않은 상태.
203 : Non-authoritative information
- 헤더 정보가 원본 서버 정보가 아닌 제 3자가 복사한 사본이거나 로컬에서 가져온 것임
204 : No Content
- 응답 헤더와 상태 코드는 수신했으나 본문 컨텐츠 내용이 없음.
205 : Reset Content
- 추가 폼 입력을 위해 브라우저가 폼 양식 데이터를 지워야 함.
206 : Partial Content
- 서버에서 요청 받은 데이터의 일부 데이터를 수신함. Range header를 지정한 요청에 대한 응답으로 사용됨.
---
300 : Multiple Choices
- 최대 5개의 링크를 서버가 제시하고 그중 하나를 선택할 수 있도록 함. 사용자 선택에 표준이 없어 미 사용.
301 : Moved Permanently 
- URI이 다른 URI로 변경 되었음을 알림.
302 : Found
- URI가 존재하지만, 일시적으로 변경되었으며, 새 URI가 나중에 생성될 예정임을 알림.
303 : See Other
- 요청한 리소스를 다른 URI에서 GET으로 얻을 수 있을 때, 서버가 알리는 코드
304 : Not Modifiend
- 응답이 수정되지 않았음을 서버가 알리는 코드. 캐싱을 목적으로 사용.
305 : Use Proxy
- 프로식를 통해서 접속해야만 함. 미 사용 코드.
306 : Unused
- 미 사용 코드.
307 : Temporary Redirect
- 요청한 페이지가 일시적으로 새 URL로 변경됨.
---
400 : Bad Request
- 서버가 요청을 이해하지 못함.
401 : Unauthorized
- 요청 받은 페이지가 사용자 이름과 비밀번호를 필요함.
402 : Payment Required
- 결제 필요함. 미 구현 코드로 사용되지 않음.
403 : Forbidden 
- 요청 받으느 페이지가 사용자 이름과 비밀번호를 필요로 함.
404 : Not Found 
- 요청 받은 페이지가 존재 하지 않음
405 : Method Not Allowed
- 허용 받지 않은 방법으로 요청함.
406 : Not Acceptable
- 클라이언트가 허용한 생성할 수 없을 때 서버 응답.
407 : Proxy Authoentication Required
- 프록시 서버로 인증해야만 요청을 받아 처리할 수 있음.
408 : Request Timeout
- 서버 대기 제한 시간이 경과하여 서버가 연결 끊음을 알림.
409 : Conflict
- 충돌로 인해 요청을 완료할수 없음.
410 : Gone
- 요청한 페이지를 더 이상 사용 할 수 없음.
411 : Length Required
- "Content-Length"가 정의 되지 않아 요청을 수락할 수 없음.
412 : Precondition Failed 
- 헤더에 들어 있는 요청 처리에 필요한 사전 조건이 만족되지 않아 서버에서 실패로 응답함.
413 : Request Entity To Large
- 요청이 너무 커서 요청을 수락할 수 없음.
414 : Reqeust-url Too Long
- 요청이 URL이 너무 길어서 요청을 수락할 수 없음.
415 : Unsupported Media Type
- 미디어 타입이 지원되지 안하 요청을 수락할 수 없음.
416 : Requested Range
- Range 요청 헤더 필드의 요청 예상을 서버에서 수용할 수 없음.
417 : Expectation Failed
- Expext 요청 헤더 필드의 요청 얘상을 서버에서 수용할 수 없음.
--- 
500 : Internal Server Error
- 내부 서버 에러. 요청 실패함.
501 : Not Implemented
- 서버가 해당 기능을 지원하지 않음. 요청 실패함.
502 : Bad Gatewqy 
- 서버가 게이트웨이 기능으로 호출한 다른 서버로 부터 잘못된 응답을 받음. 요청 실패함.
503 : Service Unavailable
- 서버가 요청을 처리할 준비가 되지 않음. 서버 과부하, 동작 준비중, 유지보수와 같은 상태
504 : Gateway Timeout
- 서버가 게이트웨이 가능으로 호출하나 다른 서버로부터 응답이 없음.
505 : HTTP Version Not Suppported
- 요청한 HTTP 버전이 서버에서 지원되지 않음.
