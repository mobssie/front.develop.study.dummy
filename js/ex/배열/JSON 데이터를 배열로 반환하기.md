## JSON 데이터르르 배열로 변환

- JSON : Javascript Object Notation
- 대규모 웹 서비스들이 제공하는 API의 데이터 포멧이 사실상 JSON으로 표준화 되면서 JSON은 웹의세상에서 데이터를 교환하는 표준으로 자리 잡았다.

### JSON값만 배열로 추출하기
- JSON데이터가 "이름:값", 또는 "키:값"의 가장 단순한 1차원 나열 형태인 경우, 값만 배열로 추출할 수 있다.
- JSON 데이터의 값들로만 배열로 가져오려면 기본 객체 메서드인 values()를 사용.

#### JSON값만 배열로 얻기
```javascript
json1 = {value1:13, value2: 10, value3: 5, value4: 40};
let value_arr = Object.values(json1);
console.log(value_arr)
// [13, 10, 5, 40]
```

### 순환문으로 JSON 값을 배열로 변환
- JSON 값이 객체 배열인 경우 순환문을 사용해 값들만 배열로 추출할 수 있다.
```javascript
json2 = {data:[{value:13}, {value: 10}, {value: 5}, {value: 40}]};
let result2 = [];
json2.data.forEach((item, idx)=>{
  result2.push(parseInt(item.value));
});
console.log(result2);
// [13, 10, 5, 40]
```

### JSON "키:값"을 중첩 배열로 가져오기
- 순환문을 사용해 "키:값" 쌍을 하위 배열 요소들로 하는 중첩 배열로 만들 수도 있다.
#### JSON 키:값을 중첩 배열로 얻기
```javascript
json3 = {data:[{name:'라이언', value:13}, {name:'콘',value: 10}, {name:'무지',value: 5}, {name:'프로도',value: 40}]};
let result3 = [];
json3.data.forEach((item)=>{
  result3.push([item.name, parseInt(item.value)]);
});
console.log(result3);
// [['라이언', 13], ['콘', 10], ['무지', 5], ['프로도', 40]]
```