배열의 길이 속성 length

Array.length = 0;
데이터를 담고 있던 배열을 간편하게 초기화 할 수 있다.

```javascript
let arr = [1, 2, 3];
arr.length; // 3 반환

arr.length = 2;
console.log(arr);
```
로 대입하면 배열은 길이가 2로 줄어들고 요소도 2개로 줄어들어 [1, 2] 출력된다.