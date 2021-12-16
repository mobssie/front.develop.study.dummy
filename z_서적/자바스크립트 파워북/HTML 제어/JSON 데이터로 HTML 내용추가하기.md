## JSON 데이터로 HTML 내용 추가하기

비동기 통신, 또는 파일에서 가져온 JSON 데이터를 이용해 HTML 엘리먼트를 추가하는 방법.

자바스크립트로 HTML 페이지를 제어할 때 가장 많이 하는 작업중 하나를 꼽으면 HTML 페이지에 새로운 내용을 동적으로 추가하는 것.
원격 서버에서 추가할 데이터나 HTML 내용의 일부를 받을 수도 있고, 또는 템플릿만 있는 HTML 페이지에 JSON 데이터를 비동기로 받아 페이지 구성 요소드을 새롭게 만들 수 도 있다.


### HTML 코드 문자열을 innerHTML에 붙이기
```html
<ul id="itmes" class="list"></ul>
```
```javascript
document.addEventListerener('DOMContentLoaded', function(){
  // JSON 객체 생성
  const json = JSON.parse('{"data": [{"name":"라이언", "age":5},{"name":"어피치", "age":4},{"name":"프로도", "age":3}]}');
  let addHtml = "";
  // HTML 코드 생성
  json.data.forEach((item)=>{
    addHtml += '<li data-age="'+itme.age+'">'+item.name+'</li>';
  });
  // innerHTML 변경
  document.getElementById('items').innerHTML = addHtml;
})
```


### 태그 엘리먼트 객체로 노드 붙이기
앞서 만든 자바스크립트 코드는 innerHTML 속성에 HTML 문자열을 추가하는 방식. 조금 더 세련되게 엘리먼트 노드 객체를 만들어서 객체를 DOM에 추가하는 방식으로 리스트 요소를 추가해보면.
```html
<ul id="itmes" class="list"></ul>
```
```javascript
document.addEventListerener('DOMContentLoaded', function(){
  // JSON 객체 생성
  const json = JSON.parse('{"data": [{"name":"라이언", "age":5},{"name":"어피치", "age":4},{"name":"프로도", "age":3}]}');
  let parent = document.querySelector('#items');
  // HTML 코드 생성
  json.data.forEach((item)=>{
    // li 노드 생성
    let li = document.createElement('li');
    li.textContent = item.name;
    li.dataset.age = item.age;
    // li 노드 추가
    parent.append(li)
  })
})
```


### 문서 프레그먼트 (Document Fragment)를 이용해 붙이기
문서 프레그먼트 노드는 HTML 태그나 표현 요소로 사용되지 않는 빈 DOM 노드이다. 프레그먼트 노드는 다른 노드들을 담는 용도로 사용.

엘리먼트 노드를 생성해 하나씩 DOM 트리에 붙이는 것보다는 프레그먼트 노드에 엘리먼트 노드를 모아서 프레그먼트 노드를 DOM 트리에 한번에 붙이는 방법이 화면 리프레시 (재 랜더링)가 한번만 있기 때문에 효율과 성능 측면에서 더 유리하다.

또한 성능적인 이슈가 없기 때문에 보다 깨끗한 코드를 생성할 수 있다.

```html
<ul id="itmes" class="list"></ul>
```
```javascript
document.addEventListerener('DOMContentLoaded', function(){
  // JSON 객체 생성
  const json = JSON.parse('{"data": [{"name":"라이언", "age":5},{"name":"어피치", "age":4},{"name":"프로도", "age":3}]}');
  let parent = document.querySelector('#items');
  let fragment = document.createDocumentFragment();
  // HTML 코드 생성
  json.data.forEach((item)=>{
    // li 노드 생성
    let li = document.createElement('li');
    li.textContent = item.name;
    li.dataset.age = item.age;
    // 프레그먼트에 li 노드 추가
    fragment.append(li)
  });
  parent.append(fragment)
})
```