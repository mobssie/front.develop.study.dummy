## Async/Await
- **ES8**에서 새로 추가된 비동기 처리 문법 프로미스 Async/Await
- Async함수는 내부에서 프로미스를 사용해 비동기 요청 결과를 반환한다.

#### 프로미스 Async/Await예
```javascript
// 프로미스 인스턴스 리턴
function asyncWork(value){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      value -= 20;
      if(value > 50){
        resolve(value);
      }else{
        reject(value)
      }
    })
  })
};
// 프로미스 요청/응답 체인
let asyncFunc = async function(){
  try{
    let res = await asyncWork(100);
    console.log('resolve1: ' + res);
    res = await asyncWork(res);
    console.log('resolve2: ' + res);
    res = await asyncWork(res);
    console.log('resolve3: ' + res);
  }catch(err){
    console.log('catch: ' + err)
  }
}
asyncFunc(); // 비동기 요청 Async 함수 실행
// resolve1: 80
// resolve2: 60
// catch: 40
```
- Async함수는 Await와 쌍을 이루어 사용.
- 프로미스의 체인 방식인 then()~catch를 대체하는 방식이므로 프로미스 인스턴스를 생성해 반환하는 과정까지는 동일하다.
- 가장 중요한 부분은 Async함수 선언과 함수 안의 Await으로 프로미스 결과를 기다리는 부분이다.
- Async 함수를 실행하면 Async 함수안에 선언된 프로미스가 실행되는데 await가 붙어 있는 프로미스는 이행 완료 상태가 될 때까지 다음 행의 코드를 실행하지 않고 대기한다.
- 이행완료가 되면 콘솔에 응답 내용을 출력하고 다음 코드 실행으로 이동한다.
- 프로미스 비동기 코드에서 거부(reject)가 발생하면 try ~ catch 예외 처리에 따라 catch() 예외 처리가 되고 비동기 처리가 종료된다.
- Async/Await의 장점은 일반 자바스크립트 코드가 실행되는 순서대로 실행되는 것과 같은 형태로 비동기 처리를 순차적으로 실행 한다는 점이다.
- Fetch보다는 가독성이 더 좋고 일반 자바스크립트 코드처럼 작성할 수 있다.