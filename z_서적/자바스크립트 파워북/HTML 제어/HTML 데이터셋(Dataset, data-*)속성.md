## HTML 데이터셋(Dataset, data-*)속성

HTML5에서 새로 확장된 속성.
"data-*"어트리뷰트로 표기하며, HTML5표준 속성처럼 접근할 수 있다.

### 데이터셋의 표준 문법
```html
<div id="slider" data-min="3" data-max="50" data-itemtype="noodle">컵라면</div>
```
데이터셋 속성은 data-속성명="속성명"으로 1개의 데이터셋 속성을 정의한다. DOM 속성으로 변환될 때는 "data-"는 제외하고, "속성명"만 실제 속성 이름으로 사용한다. 

**자바스크립트는 DOM 생성 시점에 "data-"로 시작하는 속성들을 하나로 모아 "dataset" 맵(Map)으로 따로 모아서 관리한다. 클래스 관리를 위해 classList 속성 컬렉션을 제공하는 것과 유사**


### 데이터셋 속성 추가
HTML 어트립뷰트 추가 메서드를 사용해
*"엘리먼트 노드".setAttribute("속성명", "속성값")* 방식으로 노드에 데이터셋 속성을 추가한다. 추가한 속성은 DOM 노드의 dataset 맵 속성으로 등록되며, HTML 태그 속성으로 추가된다. 
또는, DOM 프로퍼티 접근 방식으로
*"엘리먼트 노드".dataset.새데이터셋속성이름 = "속성값";*
방법으로도 데이터셋 속성을 추가할 수 있다.

#### 데이터셋 어트리뷰트 접근 예
```html
<div id="slider" data-min="3" data-max="50" data-itemtype="noodle">컵라면</div>
```
```javascript
let item = document.querySelector('#slider');
item.setAttribute('data-auto', true);
console.log(item.dataset.auto); // true
item.dataset.size = "big";
console.log(item.getAttribute('data-size')); // big
```

### dataset 객체로 데이터셋 속성 접근
DOM 생성 시점에 속성을 파싱해서 "data-"로 시작하는 속성은 표준 데이터셋 속성으로 인식한다.
이 "data-*" 속성들은 노드의 dataset 맵에 모아져 저장되며, 객체 프로퍼티 접근 방법으로 각각의 속성에 접근할 수 있다.

속성이 DOM에 저장될 때, 속성이름의 "data-"부분은 삭제되고 뒷부분만 속성(프로퍼티) 이름으로 사용된다.



### CSS로 데이터셋 속성 접근
CSS속성 선택자를 사용해 데이터셋 속성 값과 비교를 할 수 있다.
```css
.friends[data-type='animal']{

}
.a[data-max='50']{

}
```
querySelector(), querySelectorAll() 메서드를 사용할 때도 데이터셋 속성을 사용해 노드를 선택할 수 있다.
```javascript
querySelector('div[data-min="3"]');
querySelectorAll('div[data-itemtype="animal"]');
```


### 사용상 제약사항
**데이터셋 속성은 검색 엔진에서 인덱싱을 하지 않는다. 따라서 검색엔진에 노출할 내용이나, 태그에 넣어야 할 컨텐츠를 데이터셋 속성으로 표시하면 안된다. 또, 인터넷 익스플로러 10까지는 지원되지 않는다. 인터넷 익스플로러 10이하 호환성 유지가 필요한 경우, 데이터셋 속성에 접근하려면 getAttribute()로 개별 접근해야 한다. 접근 방법의 제약으로 인해 인터넷 익스플로러 10이하 지원이 필요한 경우 데이터셋 속성 사용은 가능하면 피하는 것이 좋다.**


### 데이터셋 속성 모두보기
DOM 데이터셋 속성은 별도로 "dataset" 맵으로 모아 저장된다. 데이터셋 속성을 하나씩 출력해 확인할 수도 있지만, "dataset" 맵 전체를 콘솔에 바로 출력해 데이터 셋 속성 값을 한번에 확인할 수도 있다.
```html
<div id="slider" data-min="3" data-max="50" data-itemtype="noodle">컵라면</div>
```
```javascript
let item = document.querySelector('#slider');
console.log(item.dataset);
// [object DOMStringMap] {
//   itemtype : "noddle",
//   max : "50",
//   min : "3"
// }
```