## DOM 노드의 생성, 수정, 삭제

- 자바스크립트로 DOM노드를 제어하는데 필요한 모든 속성과 메서드를 제공하기 때문에 메서드와 속성의 개수가 상당히 많다.
- 특별히 속성이나 메서드 이름에 "Element"가 붙은 것은 HTML태그 엘리먼트를 대상으로 동작하는 속성/메서드이다.

### 메서드는 DOM메서드와 자바스크립트 범용 메서드 2가지
* DOM메서드는 파라메터로 노드 객체만 사용할 수 있다.
* 자바스크립트 메서드는 노드 객체와 DOM 문자열(태그 문자열)을 모두 사용할 수 있다.


---
#### appendChild()
타입 : DOM 메서드
설명 : 선택한 엘리먼트의 자식 엘리먼트 중 마지막 엘러먼트 뒤에 추가함.
DOM 메서드로 엘리먼트(노드) 객체만 사용 가능.
붙인 노드 오브젝트가 반환됨. 노드 1개만 추가 수 있음.
---
#### remove()
타입 : DOM 메서드
설명 : 현재 엘리먼트를 삭제. 삭제할 엘리먼트의 참조만 있으면 됨. 인터넷 익스플로러 미지원.
---
#### removeChild()
타입 : DOM 메서드
설명 : 현재 엘리먼트의 자식 엘리먼트 1개를 삭제. 부모 엘리먼트와 삭제할 엘리먼트 2개의 참조가 필요함.
---
#### replaceChild()
타입 : DOM 메서드
설명 : 현재 엘리먼트를 다른 엘리먼트로 대체한다. 대체된 노드는 반환 값으로 얻을 수 있다.
---
#### insertBefore()
타입 : DOM 메서드
설명 : DOM 메서드 부모노드. insertBefore(추가할 새 노드, 기준 참조 노드);
기준 참조 노드 앞에 새 노드를 추가한다. 실행 후 추가된 새 노드 참조를 반환한다.
(추가한 노드가 문서 프래그먼트인 경우 빈 프레그먼트를 반환) insertAfter()는 제공되지 않는다.
엘리먼트 노드에만 사용할 수 있으며, 태그 쌍을 기준으로 시작 태그와 끝나는 태그의 앞에 삽입하는 방식.
엘리먼트 추가에 성공하면 추가된 엘리먼트가 반환되며, 실패하면 null을 반환한다.
---
#### hasChildNodes()
타입 : DOM **메서드**
설명 : 자식 노드가 있으면 true, 없으면 false
---
#### cloneNode()
타입 : DOM **메서드**
설명 : 현재 노드를 복사해 반환한다.
파라메터로 true/false를 인자로 보낼 수 있다.
true면 노드가 담고 있는 텍스트 등 내용까지 복사된다. false면 노드 외형만 복사.
---
#### previousSibling() / nextSibling()
타입 : DOM *속성*
설명 : 
previousSibling() : 이전 이웃 노드 반환
nextSibling() : 다음 이웃 노드 반환
반환할 이웃 노드가 없으면 null 반환
---
#### insertAdjacentElement()
타입 : DOM **메서드**
설명 : 
대상 엘리먼트의 태그 안과 밖 위치에 엘리먼트를 추가.
대상엘리먼트.insertAdjacentElement(위치, 추가할 요소);
위치 값은 beforebegin, afterbegin, beforeend, afterend 4개를 지원
대상 엘리먼트 바깥 앞 (beforebegin), 바깥 뒤(afterend), 안쪽 내용 앞(afterbegin), 안쪽 내용 뒤(beforeend)에 엘리먼트를 추가한다.
---
#### firstChild(), lastChild()
타입 : DOM *속성*
설명 : 
firstChild : 첫 번째 자식 노드를 반환
lastChild : 마지막 자식 노드를 반환
---
#### firstElementChild(), lastElementChild()
타입 : DOM *속성*
설명 : 
firstElementChild - 첫번째 자식 엘리먼트 반환
lastElementChild - 마지막 자식 엘리먼트를 반환
자식 엘리먼트가 없을 경우 null 반환
---
#### children()
타입 : DOM *속성*
설명 : 
현재 노드의 모든 자식 엘리먼트 노드 컬렉션을 반환함.
배열 순환하는 방식으로 반환된 노드 컬렉션을 순환할 수 있음.
*엘리먼트 노드만 반환함.*
---
#### createElement(), createTextNode()
타입 : DOM **메서드**
설명 : 
createElement() - 엘리먼트를 생성함. 파라메터에는 태그 이름만 사용 가능. 생성된 엘리먼트 노드 객체를 반환함.
createTextNode() - 텍스트 노드를 생성해 텍스트 노드를 반환함.
---
#### before(), after()
타입 : 자바스크립트 메서드
설명 : 
after() - 선택한 노드의 뒤에 추가함.
before() - 선택한 노드의 앞에 추가함.
문자열, 엘리먼트(노드) 객체 모두 추가 요소로 사용 가능하며, 문자열을 인자로 넣을 경우 텍스트 노드가 추가됨.
반환 값이 없음.("undefined" 반환)
나머지 파라메터로 여러 개의 노드와 문자열을 추가하는 것이 가능.
**인터넷 익스플로러 미지원.**
createTextNode(), createElement() 이용한 노드 생성 및 추가 과정을 before()/after() 1개의 메서드로 줄여서 사용할 수 있기 때문에 코드 최적화 및 가독성 향상에 유리함.
가급적 before(), after() 메서드를 사용해 DOM을 제어하는 것을 추천한다.
----
#### prepend(), append()
타입 : 자바스크립트 메서드
설명 : 
prepend() - 현재 엘리먼트 첫번째 자식 엘리먼트 앞에 추가한다.
append() - 현재 엘리먼트의 자식 엘리먼트 중 마지막 엘리먼트 뒤에 추가한다.
문자열, 엘리먼트(노드) 객체 모두 추가 요소로 사용 가능하며, 문자열을 인자로 넣을 경우 텍스트 노드가 추가됨.
반환 값이 없음 ("undefined"반환)
나머지 파라메터로 여러 개의 노드와 문자열을 추가하는 것이 가능.
**인터넷 익스플로러 미지원.**
createTextNode()와 createElement()를 이용한 노드 생성 및 추가 과정을 prepend(), 또는  append() 1개의 메서드로 줄여서 사용할 수 있기 때문에 코드 최적화 및 가독성 향상에 유리하다.
가급적 prepend(), append() 메서드를 사용해 DOM을 제어하는 것을 추천한다.


### HTML 도큐먼트 생성
자바스크립트 메서드를 사용해 새로운 DOM 트리 전체를 생성할 수 있다.
기존 DOM 트리를 대체하거나, 아이프레임에 HTML문서를 새로 적용할 경우 별도의 HTML파일을 읽어 적용할 필요없이 자바스크립트로 바로 적용할 수 있다.


##### HTML 페이지에 아이프레임(id: newframe)이 하나 있다고 가정하고, 여기에 자바스크립트로 HTML 도큐먼트를 만들어서 아이프레임에 붙여 넣기
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, inital-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="./script.js"></script>
  </head>
  <body>
    <iframe id="newframe"></iframe>
  </body>
</html>
```
```javascript
document.addEventListener('DOMContentLoaded', function(){
  // 새 HTML 도큐먼트 객체 생성
  let newdoc = document.implementation.createHTMLDocument('HTML Document');
  // div 태그 안에 내용을 만들어 넣음
  let div = newdoc.createElement('div');
  div.innerHTML = '<span>HTML 문서 샘플</span>';
  // 도큐먼트 바디(body)에 자식으로 붙임
  newdoc.body.appendChild(div);
  // HTML 도큐먼트를 붙여넣을 아이프레임 참조 얻기
  targetdoc = document.getElementById('newframe').contentElement;
  // 붙여넣을 새 노드를 복사해옴
  let newnode = targetdoc.importNode(newdoc.documentElement, true);
  // 아이프레임 도큐먼트를 새 노드로 대체
  targetdoc.replaceChild(newnode, targetdoc.docmentElement);
})
```

### 엘리먼트 선택
HTML 엘리먼트 선택은 querySelector(), querySelectoreAll()두개의 메서드를 사용
- querySelector()는 엘리먼트 1개를 반환. **반환할 엘리먼트가 없으면 "null" 반환**
- querySelectorAll()는 엘리먼트(노드)리스트를 반환한다. **반환할 엘리먼트가 없을 경우 길이가 0인 엘리먼트 리스트를 반환**
반환할 엘리먼트가 없을 경우 querySelector()와 querySelectorAll()이 반환하는 결과가 다른 점을 주의해야 한다. 
반환 값을 조건문으로 체크할 때 null과 비교해야 할지, length 속성이 0인지를 비교해야 할지를 구분해야 하기 때문.

CSS 선택자는 태그의 ID, 또는 CSS 클래스를 사용할 수 있다.
`element.querySelector('id');`
`element.querySelector('.class');`
CSS 선택자는 id나 클래스 1개를 사용하는 간단한 선택부터, CSS와 ID를 조합한 복잡한 선택까지 지원한다.
`element.querySelectorAll('div.section > p#comment span.bold')`


### 엘리먼트 생성
노드 생성은 HTML *엘리먼트를 생성하는 createElement()*와 *텍스트 노드를 만드는 createTextNode()*메서드 2개를 사용할 수 있다. 
태그 노드를 생성하는 createElement() 메서드로 태그를 만들어 HTML 도큐먼트에 붙이려면 
#### createElement()
```javascript
let div = document.createElement('div');
let span = document.createElement('span');
span.innerText = 'HTML 문서 샘플';
div.appendChild(span);
document.body.appendChild(div);
```
>엘리먼트의 innerHTML 속성에 태그 문자열을 직접 입력해서 DOM을 생성할 수 도 있다.

```javascript
docuement.body.innerHTML = '<div><span>HTML 문서 샘플</span></div>'
```

### 엘리먼트 삭제
remove(), removeChild()메서드를 이용해 태그 엘리먼트를 삭제할 수 있다. remove()는 엘리먼트 자신을 삭제하며, removeChild()는 부모 요소의 자식 요소를 삭제한다. 부모요소 removeChild(자식요소); 형식으로 부모 요소와 자식 요소 모두를 선택해야 한다.

부모요소.removeChild(자식요소); 형식으로 부모요소와 자식 요소 모두를 선택해야 한다.
현재 선택한 엘리먼트와 그 엘리먼트의 자식 엘리먼트 모두 선택할 수 있어야 removeChild()를 사용할 수 있다.
```javascript
document.getElementById('delid').remove();
let parent = document.getElementById('parentdiv');
let child = document.getElementById('childspan');
parent.removeChild(child);
```
### 엘리먼트 삽입, 이동
생성한 엘리먼트, 또는 선택한 엘리먼트를 HTML 도큐먼트의 원하는 위치에 삽입하는 메서드는 여러가지가 있다.

#### 엘리먼트 삽입 이동의 예
```javascript
// 새 <li> 엘리먼트 생성
let li = document.createElement('li');
let litext = document.createTextNode('무지');
li.appendChild(litext);
// 새 <li> 엘리먼트를 붙일 대상 부모 선택
let targetul = document.getElementById('friends');
targetul.appendChild(li); // friends ID를 가진 ul 자식들 맨끝에 새로 만든 <li> 태그를 붙임.
// 이동할 엘리먼트 선택
let sourceli = document.querySeletor('ul#friends li:first-child');
// 삽입할 위치 기준 엘리먼트 선택
let targetli = document.querySeletor('ul#friends li:last-child');
// 붙여넣는 위치에 주의해야 함.
// 1뎁스 ul 마지막 요소가 아니라 중첩된 내부 ul 끝에 붙게됨.
targetli.after(sourceli);

// 문자열을 가지는 li 엘리먼트를 생성해 자식 엘리먼트로 붙임
var appendli = document.createElement("li");
appendli.append("왕눈이");
document.querySelector('ul li ul').append(appendli);

// 마지막 차일드 엘리먼트 선택
let selected = document.querySelector('.icons li span:last-child');
// 추가할 span 노드 생성
let newspan = document.createElement('span');
let newspantext = document.createTextNode('빅');
newspan.appendChild(newspantext);
// 마지막 엘리먼트 앞에 추가
selected.parentNode.insertBefore(newspan, selected);

// animal 클래스 속성을 가진 li 엘레먼트들을 선택
let items = document.querySelectorAll('.animal');
// 나머지 파라메터로 새 ul에 선택한 엘리먼트들을 추가
document.querySelector('#newfriends').prepend(...items);
```

### 엘리먼트 교체
선택한 엘리먼트 자체를 새로 생성한 엘리먼트, 또는 선택한 엘리먼트로 바꿀수 있다.
replaceChild()메서드는 현재 엘리먼트의 하위에 있는 자식 엘리먼트 1개를 새 엘리먼트로 교체한다.

새 엘리먼트 1개를 만드러서 기존 엘리먼트를 교체해보면
replaceChild()메서드는 엘리먼트를 교체한 후 대체된 원래 엘리먼트를 반환한다.

원래 엘리먼트를 재활용하거나 다른 위치에 다시 붙어야 할 경우, 반환된 엘리먼트를 새 변수에 저장해 재 사용할 수 있다.
```javascript
// <p> 엘리먼트 생성
let p = document.createElement('p'); 
// 문단 내용 텍스트 생성
let ptext = document.createTextNode('문단 텍스트 내용');
// 문단 내용을 <p>에 텍스트 채움
p.appendChild(ptext);

// 교체할 엘리먼트 선택
let originalp = document.getElementById('paragraphid');
// 교체할 엘리먼트의 부모태그에서 자식 엘리먼트 교체
let oldp = originalp.parentNode.replaceChild(p, originalp)

```