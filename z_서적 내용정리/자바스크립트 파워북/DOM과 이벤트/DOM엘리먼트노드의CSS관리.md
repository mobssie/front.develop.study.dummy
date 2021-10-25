## DOM 엘리먼트 노드의 CSS 관리

다른 용도로 사용하는 "class" 키워드와의 혼동을 줄이기 위해 DOM 엘리먼트 노드의 CSS는 HTML태그의 속성과 다른 이름을 사용한다.
DOM 엘리먼트 노드의 CSS 클래스 접근은

```javascript
엘리먼트노드.className;
```

HTML태그의 CSS 속성은 class="클래스명"으로 한다.

```javascript
element.setAttribute("class", "클래스명");
```

로 적용하면 *동일하게 DOM 엘리먼트 노드의 className속성에도 반영*된다.
클래스 속성에 접근하는 이름이 다르지만, 둘은 값을 공유하며, 어느 한쪽의 값이 변경되면 함께 반영된다.

### 클래스 추가

클래스 1개를 추가할때에는

```javascript
엘리먼트 노드.className = '클래스명';
엘리먼트 노드.setAttribute('class', '클래스명')
```

2개 이상을 추가할때

```javascript
엘리먼트 노드.className = '클래스명1 클래스명2'
엘리먼트 노드.setAttribute('class', '클래스명1 클래스명2')
```

기존 클래스에 추가 클래스를 적용하려면 추가하는 새 클래스명을 "+" 연산자로 더하면 된다.
_!주의_ 기존 클래스에 더해 추가하려면 앞에 공백을 넣어 클래스명을 띄어야 한다.

```javascript
엘리먼트노드.className += " 클래스명3";
parent.setAttribute("class", parent.getAttribute("class" + " 클래스3"));
```

#### 클래스 추가 예

```html
<div id="title">title</div>
<div id="content">content</div>
```

```javascript
document.querySelectorAll("div").forEach(function (el) {
  el.setAttribute("class", "bold padding10"); // setAttribute() 메서드는 클래스 추가
});
document.getElementById("title").className += " bigtext"; // className 속성으로 클래스 추가

// <div id="title" class="bold padding10 bigtext">title</div>
// <div id="content" class="bold padding10"></div>
```

### 클래스 변경

태그에 적용되어 있는 여러 클래스 중 하나를 다른 클래스로 변경하려면 정규 표현식을 사용해 문자열 대체를 하는 방법을 사용해야 한다.
"classList" 클래스 모음을 컬렉션으로 관리하면 정규 표현식으로 관리하는 방식은 더 사용할 일이 없으며, 예외적으로 인터넷 익스폴로러 호환성을 유지할 필요가 있는 경우에만 사용하게 된다.

클래스 문자열에서 특정 클래스명을 골라내는 정규 표현식은

```
/클래스명/g
```

#### 예를들어 "클래스1"을 "클래스2"로 바꾸는 경우

```javascript
엘리먼트노드.className = 엘리먼트노드.className.replace(/클래스1/g, "클래스2");
```

```javascript
if (엘리먼트노드.className.match(/클래스1/g)) {
  // 클래스1 있음 변경 처리
}
```

##### 클래스 변경의 예

```html
<div id="title" class="bold padding10 bigtext">title</div>
<div id="content" class="bold padding10">content</div>
```

```javascript
document.getElementById("title").className = document
  .getElementById("title")
  .className.replace(/bigtext/g, "smalltext");
document.querySelectorAll("div").forEach(function (el) {
  if (el.className.match(/bold/g)) {
    el.setAttribute(
      "class",
      el.getAttribute("class").replace(/padding10/g, "pagging10") + " red"
    );
  }
});
// <div id="title" class="bold padding0 smalltext red">title</div>
// <div id="content" class="bold padding0 red">title</div>
```
