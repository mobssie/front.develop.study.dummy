## append()와 appendChild()의 차이
append()와 appendChild()는 같은 기능을 하는 메서드이다. 기능이나 확장성에서 append()가 뛰어나기 때문에 append() 사용하는것이 좋다.

두 메서드의 차이점
차이점           | append()                  | appendChild()
타입             | 자바스크립트 메서드           | DOM메서드
추가노드개수       | 여러개 허용                 | 1개
                | 나머지 파라메터 사용가능       |
                | 엘리먼트.append(...nodes); |
문자열 노드 추가 지원| 가능                      | 노드 객체만 가능
                | DOM 문자열, 태그와 조합해     |
                | 여러개의 텍스트 노드,         |
                | 또는 엘리먼트 노드를 여러개     |
                | 만들 수 있다.               |
                | 엘리먼트.append('문자열');   |
                | 엘리먼트.append('문자열',p); |
인터넷 익스플로러   | 미지원                     | 지원
prepend 지원     | prepend() 메서드로          | prependChild() 미지원
                | 자식 끝에 추가 지원           |     
반환값            | 없음(undefined)           | 추가된 노드 참조 반환         


### append() 메서드의 사용 장점
1. 텍스트 내용이 있는 엘리먼트를 추가할 경우 append()를 사용하면 코드 작성량을 줄일수 있는데 appendChild()를 사용하면 다음과 같이 대상 노드에 텍스트 노드가 들어있는 새 노드를 추가해야 한다.
```javascript
let li = document.createElement('li');
let litext = docuement.createElement('무지');
li.appendChild(litext);
let targetul = document.getElementById('friends');
targetul.appendChild(li)
// append()를 사용하면
let li = document.createElement('li');
li.append('무지');
let targetul = document.getElementById('friends');
targetul.append(li);
```

2. append()는 나머지 파라메터를 지원한다.
나머지 파라메터를 사용하면 CSS쿼리 선택자로 선택한 모든 엘리먼트 노드들을 원하는 위치로 옮길수 있다.

```javascript
let items = document.querySelectorAll('.animal');
document.querySelector('#newfriends').append(...items);
```