## DOM노드와 속성의 이해

**DOM은 노드(Node)들이 트리 형태로 구조화 된 데이터를 표현한것.**
- 노드는 DOM트리를 구성하는 최소한의 단위이며, 기본요소이다.
- HTML페이지를 DOM으로 표현할 때는 HTML태그 말고도 다른 여러가지 타입의 노드들이 생성된다.
- DOM은 HTML과 XML을 위한 데이터 구조 표현이기 때문에 XML전용인 노드 타입 또한 여러가지가 있다.

---
노드 종류 : ELEMENT_NODE
HTML 용도 : <body>, <a>, <div>, <style>, <script>, <h1>, <span>
상수값 : 1
---
노드 종류 : ATTRIBUTE_NODE
HTML 용도 : `id="myelement", class="align-right", width="300"`
상수값 : 2
---
노드 종류 : TEXT_NODE
HTML 용도 : 텍스트 문자열 노드, HTML페이지 안의 모든 텍스트
상수값 : 3
---
노드 종류 : CDATA_SECTION_NODE
HTML 용도 : 
상수값 : 4
---
노드 종류 : ENTITY_REFERENCE_NODE
HTML 용도 :
상수값 : 5
---
노드 종류 : ENTITY_NODE
HTML 용도 : 
상수값 : 7
---
노드 종류 : PROCESSING_INSTRUCTION_NODE
HTML 용도 : 
상수값 : 7
---
노드 종류 : COMMENT_NODE
HTML 용도 : <!-- 코멘트 표시 -->
상수값 : 8
---
노드 종류 : DOCUMENT_NODE
HTML 용도 : document 루트 노드(DOM 루트 노드)
상수값 : 9
---
노드 종류 : DOCUMENT_TYPE_NODE
HTML 용도 : <!document>
상수값 : 10
---
노드 종류 : DOCUMENT_FRAGMANE_NODE
HTML 용도 : 노드를 묶음 처리하는 용도로 사용하는 빈 노드
상수값 : 11
---
노드 종류 : NOTATION_NODE
HTML 용도 : 
상수값 : 12
---

- HTML페이지에서 가장 중요한 노드 타입은 앨리먼트 노드(ELEMENT_NODE), 어트리뷰트 노드(ATTRIBUTE_NODE)이다.
> 이 두 노드는 태그와 태그의 속성을 담는 노드로 HTML, DOM표현의 근간이 된다.
> 자바스크립트로 DOM을 탐색하거나 화면에 표시되는 태그를 조작할 때 선택하는 노드가 주로 이 두가지 노드이다.
**가장 중요한 점은 자바스크립트로 HTML DOM을 탐색할 떄, HTML태그와 DOM노드는 1:1로 매칭되지 않는다.**
- 예를 들어 DOM에 인접한 다음 노드를 얻는 nextSiblig()메서드로 현재 태그의 다음 노드를 얻는다고 해서 이 노드가 인젖ㅂ한 다음 태그가 된다는 보장은 없다.
- 그래서, 자바스크립트 DOM탐색 메서드 중에서 태그 노드만 탐색할 수 있는 메서드를 추가 제공한다.

### 프로퍼티(Property)와 어트리뷰트(Attribute)속성의 이해
*DOM의 속성은 프로퍼티(Property)*
*HTML태그의 속성은 어트리뷰트(Attribute)*
웹 브라우저가 HTML 페이지를 읽어 DOM을 생성할 때, HTML태그의 속성(어트리뷰트)들을 읽어 파싱(Parsing)을 한다. 
속성이 HTML표준 속성(어트리뷰트)이면 DOM에도 동일한 속성(프로퍼티)이 만들어 진다.

표준 속성인 경우, HTML 어트리뷰트와 DOM프로퍼티는 속성 값 또한 공유한다.

HTML 태그의 속성이 표준 속성이 아닌 경우, DOM 프로퍼티는 생성되지 않는다.
이 경우 HTML태그의 비표준속성은 사용자 커스텀 속성이 된다.
반대인 경우, 자바스크립트 DOM노드에 사용자 정의 속성이나 메서드를 추가할 수 있다.

DOM에 추가한 커스텀 속성(프로퍼티)은 DOM에서만 접근 가능한 속성이 되며, HTML속성(어트리뷰트)은 생성되지 않는다. 생성된 DOM 속성은 DOM 노드 객체의 속성이 되며, 객체의 속성 접근 방식으로 접근이 가능하다.
```javascript
document.getElementById('elem').myproperty = 'prop';
console.log(document.getElementById('elem'));
```
>> 자바스크립트의 어트리뷰트 속성 제어용 메서드를 사용하면 HTML태그의 비표준 속성을 포함해 모든 HTML태그의 속성을 제어할 수 있다.

### HTML 어트리뷰트 속성 제어 메서드
```javascript
element.hasAttribute(속성이름) - 속성이 있는지 확인
element.getAttribute(속성이름) - 속성값 얻기
element.setAttribute(속성이름, 속성값) - 속성값 변경
elememt.removeAttribute(속성이름) - 속성 제거
element.attributes() - 전체 속성의 컬렉션 반환 
```
- 속성이름은 대소문자를 구분하지 않는다. 따라서 대문자를 포함한 속성을 인자로 사용해도 실제 속성 이름은 모두 소문자로 변환이 되어 적용이 된다.

가장 많이 사용하는 것은 클래스 속성이다. 
HTML의 클래스 정의 속성은 "class"지만, DOM의 속성은 "className"이다.
DOM 속성 값은 element.className으로 가져오지만, HTML 속성 값은 "elememt.getAttribute('class')"로 가져온다.

```HTML
<ul id="menu">
  <li id="msnu1">홈</li>
  <li id="msnu2">서비스</li>
  <li id="msnu3">고객지원</li>
</ul>
```
```javascript
let elem = document.getElementById('menu');
console.log(elem.outerHTML); // HTML태그 출력
// info 어트리뷰트와 프로퍼티 출력
console.log('elem.getAttribute("Info"): ' + elem.getAttribute(Info)); // null
console.log('elem.info: ', elem.info); //undefined

// attr 어트리뷰트 추가
elem.setAttribute('Attr', 123);
console.log('elem.attr: ', elem.attr); // undefined
// 클래스 속성 wide 추가
elem.setAttribute('class', 'wide');
console.log('elem.className: ', elem.className); // wide
// 클래스 속성 narrow로 속성
elem.className = 'narrow';
console.log('elem.getAttribute("class"): ' + elem.getAttribute('class')); // narrow
// DOM 프로퍼티 newproperty추가
elem.newproperty = 'New Property';

console.log('elem.newproperty: ' + elem.newproperty); // New Property
console.log(elem.getAttribute('newproperty')); // null
// 태그 HTML 출력
console.log(elem.outerHTML);
// 어트리뷰트 출력
for (let attr of elem.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}

// <ul id="menu">
//   <li id="msnu1">홈</li>
//   <li id="msnu2">서비스</li>
//   <li id="msnu3">고객지원</li>
// </ul>
// elem.getAttribute("Info") : null
// elem.info: undefined
// elem.attr: undefined
// elem.className: wide
// elem.getAttribute("class"): narrow
// elem.newproperty: New Property
// null
// <ul id="menu" attr="123" class="narrow">
//   <li id="msnu1">홈</li>
//   <li id="msnu2">서비스</li>
//   <li id="msnu3">고객지원</li>
// </ul>
// id = elem
// arrt = 123
// class = narrow
```