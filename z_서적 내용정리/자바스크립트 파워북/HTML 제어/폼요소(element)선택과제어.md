## 폼 요소(Element) 선택과 제어
- 폼과 폼 요소 기초
폼과 폼 요소는 HTML 요소 중에서 사용자와 상호작용을 하는 유일한 요소이다.
폼과 폼 요소들은 기본적으로 이름(name)속성을 가지고 있다. 이름을 통해 개별 폼 및 폼 요소에 접근할 수 있으며, 요소의 속성과 값 또한 접근할 수 있게 된다.
ID값은 선택적으로 사용하는 것이 좋으며, ID 값은 충분히 식별 가능한 이름으로 정해야한다. 폼 요소의 이름과 ID는 대소문자를 구분한다. 자바스크립트 네이밍 규칙에 따라 단어를 조합할 때는 2번째 단어부터는 시작 문자를 대문자로 사용해 정하는 것을 추천.
HTML 페이지 안에 폼 여러개인 경우 폼 이름 외에 폼 인덱스로 폼을 순서대로 접근할 수 있다.
"document.forms[]"은 HTML 페이지 안에 2번째 폼이라는 뜻.

"document.forms"는 배열이며, HTML 페이지 안의 각 폼에 대한 참조를 담고 있다.
폼에 들어있는 폼 요소들도 폼과 동일하게 배열 참조를 가지고 있다.

```javascript
document.forms[0].element[0];
```
> 실제로는 이렇게 사용하지는 않음.

```javascript
document.forms.myform.elements.ordername;
```
과 같은 형식으로 폼 이름, 또는 ID로 폼 요소에 접근해서 값을 얻거나 제어를 한다. 폼 요소에는 개별 이름이나 ID가 있고, 이름 기반으로 값이나 속성에 접근을 하게 된다.
```javascript
document.form1.getElementById('ID값')
document.form1.getElementByName('요소이름')
document.form1.getElementByClassName('클래스명')
document.form1.querySelector('쿼리선택자')
document.form1.querySelector('쿼리선택자')
```
> 앞의 요소 선택 문은 모두 폼 요소(element)를 반환.

#### HTML 폼예
```html
<form name="myform" id="myform" method="post">
  <input type="hidden" name="key" value=""/>
  <input type="text" name="name" value="">
  <input type="tel" name="tel" size="13" maxlength="13" value="">
  <fielset name="options">
    <legend>상품옵션</legend>
    <input type="radio" name="size" value="대과"/>
    <input type="radio" name="size" value="중과" checked/>
    <input type="checkbox" name="giftpack" value="선물상자"/>
    <input type="checkbox" name="giftpack" value="보자기포장"/>
    <select name="weight">
      <option value="1">1kg</option>
      <option value="5">5kg</option>
      <option value="10">10kg</option>
    </select>
  </fielset>
  <fielset name="buttons">
    <button type="button" name="order">주문</button>
    <button type="button" name="wishlist">찜해놓기</button>
  </fielset>
</form>
```
```javascript
const myform = document.forms.myforms;
myform.elements.name.value = '주문자명';
console.log(document.forms[0].elements[1].value);
console.log(myform.elements.name.value);
let ordername = myform.querySelector('input[name="name"]');
console.log(ordername.value)
```

#### 폼 요소 선택과 폼 필드 값 얻기 예
```javascript 
const myform = document.forms.myform;

myform.elements.name.value = '주문자명';
console.log(myform.elements.name.value); // 대과

// 라디오박스
myform.elements.size[0].checked = true;
console.log(myform.elements.size.value);

//체크박스
myform.elements.giftpack[1].checked = true;
console.log(myform.elements.size.value); // 2
let giftpack = [];
myform.elements.giftpack.forEach(function(check){
  if(check.cheched){giftpack.push(check.value)}
})
console.log(giftpack);

// 이벤트 델리게이션으로 버튼 이벤트 처리
let buttons = myform.buttons;
buttons.addEventListerener('click', function(e){
  switch(e.target.name){
    case 'order';
      console.log('주문폼 주문 저장!'); // ["보자기포장"]
      // 주문폼 전송 처리
    break;
    case 'wishlist';
      console.log('찜해놓기에 저장!'); // 주문폼 주문 저장!
      // 주문폼 전송 처리
    break;
  }
});
```



### 폼 속성 제어
```javascript
const myform = document.forms.myform;

console.log(document.forms[0].size.length); // 2
console.log(myform.elements.giftpack[0].checked); // false

let weight = myform.querySelector('select[name=weight]');
console.log(weight[0].label); // 1kg
console.log(weight.selectedIndex); // 0
```



### 폼 전송
```javascript
const myform = document.forms.myform;
form.action = "save.html" // 폼을 전송할 페이지
// 폼의 인코딩 타입 지정. 첨부파일이 있을경우 등의 바이너리 데이터에 대한 대응 속성
form.enctype = "multipart/form-data"
// 폼 전송 전 폼 체크와 같은 전 처리 함수를 호출한 후 폼 전송
form.onsubmit = "return checkForm()";
form.submit();
```
---
속성 : method
사용 가능값 : GET, POST 사용 가능. 폼 데이터를 전송하는 전송 방식을 결정
---
속성 : action
사용 가능값 : 경로 및 폼 데이터를 수신할 페이지
---
속성 : enctype
사용 가능값 : 
text/plain : 인코딩 없이 텍스트 그대로 전송.
application/www-form-urlencoded : 기본 값. 폼 데이터를 인코딩해서 전송
multipart/form-data : 첨부 파일이 있을 경우 사용
---
속성 : target
사용 가능값 : 
_self: 현재 탭(창)으로 폼 데이터를 전송함
_blank: 새창/탭을 띄워 폼 데이터를 전송함
아이프레임명: 아이프레임으로 폼 데이터를 전송함
_parent: 부모 프레임으로 폼 데이터를 전송함.