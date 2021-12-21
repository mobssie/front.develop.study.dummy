## scrollHeight, clientHeight, offsetHeight의 차이

### clientHeight는 요소의 내부 높이. 패딩 값은 포함되며, 스크롤바, 테두리, 마진은 제외된다.
### offsetHeight는 요소의 높이. 패딩, 스크롤바, 테두리가 포함된다. 마진은 제외
### scrollHeight는 요소에 들어있는 컨텐츠의 전체 높이. 패딩과 테두리가 포함된다. 마진은 제외된다.

offsetHeight는 CSS로 요소의 높이를 지정할 때 정해지는 높이.
패딩과 테두리가 포함되며, "box-sizing"모델 속성 값에 따라 패딩과 테두리 값이 제외될 수 있으므로 주의해야 한다.
요소가 감춤 상태인 경우 offsetHeight는 "0"을 반환