## stopPropagation()과 preventDefault()차이
이벤트 리스너로 이벤트를 처리할 때 이벤트 흐름을 바꾸거나 취소할 수 있는 메서드로 "stopPropagation()"과 "preventDefault()"가 있다. 둘은 이벤트를 취소하는 기능으로는 유사하지만 실제 사용하는 방법이나 적용 결과는 전혀 다르다.
### preventDefault()
타겟의 이벤트를 취소하고, 기본 이벤트 동작 또한 취소한다. 콜백 함수 부분만 실행!

```html
<a href="#" id="showlist">보기</a>
```
```javascript
document.getElementById('showlist').addEventListerener('click', function(e){
  console.log('목록 출력');
  e.preventDefault();
})
```

### stopPropagation()
stopPropagation()은 타겟의 콜백 함수 및 기본 동작을 실행하지만, 상위, 또는 하위 요소로의 이벤트 전파는 차단한다.

이벤트 타겟 엘리먼트에 등록된 이벤트와 같은 타입의 이벤트를 상위 요소에도 등록한 경우, 이벤트가 버블링 되면서 상위 요소의 콜백 함수도 실행된다.

상위요소의 이벤트가 실행되는게 의도한 것이 아닌 경우, 이벤트 타겟의 콜백 함수에 stopPropagation()을 사용해 이벤트 전파를 막으면 된다.

```javascript
document.getElementById('mainmenu').addEventListerener('click', function(e){
  let manulabel = e.target.tagName == 'A' ? e.target.parentNode.childNodes[0].textContent : e.target.childNodes[0].textContent;
  switch(menulabel){
    case "메뉴1":
      break;
    case "메뉴2":
      break; 
    case "메뉴3":
      break;
    case "메뉴4":
      break;  
  }
  console.log(menulabel + '페이지 이동!')
});
document.getElementById('showevent').addEventListerener('click', function(e){
  console.log('이벤트 팝업 표시!');
  e.stopPropagation();
})
```