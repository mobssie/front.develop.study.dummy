## Data Option
https://v3.ko.vuejs.org/guide/migration/data-option.html#%E1%84%80%E1%85%A2%E1%84%8B%E1%85%AD


BREAKING: data 컴포넌트 옵션 선언은 더이상 일반 자바스크립트 object를 허용하지 않으며, function 선언을 해야한다.
BREAKING: mixin 또는 extends에서 여러 data 반환 값을 병합할 때, 병합은 deep은 아니라 shallow이다.

### 2.x 구문
2.x에서는 개발자는 object 또는 function을 사용하여 data 옵션을 정의할 수 있다.
예
```js
// 객체 선언
<script>
  const app = new Vue({
    data: {
      apiKey : 'a1b2c3'
    }
  })
</script>

// 함수 선언
<script>
  const app = new Vue({
    data() {
      return {
        apiKey : 'a1b2c3'
      }
    }
  })
</script>
```
- 이는 공유 상태를 갖는 루트 인스턴스 측면에서 약간의 편의를 제공하였지만, 루트 인스턴스에서만 가능하다는 사실로 인해 훈란을 야기했다.




### 3.x 변경점
3.x에서 data 옵션은 object를 반환하는 function만 허용하도록 표준화되었다.
위의 예제를 사용하면 가능한 코드 구현이 하나뿐이다.
```js
<script>
  import { createApp } from 'vue'
  createApp({
    data() {
      return {
        apiKey : 'a1b2c3'
      }
    }
  }).mount('#app')
</script>
```

### Mixin 변합 동작 변경
또한, 컴포넌트의 data()와 해당 Mixin 또는 extends 기반이 병합되면, 병합은 shallowly(얕게) 수행된다.
```js
const Mixin = {
  data() {
    return {
      user: {
        name: 'Jack',
        id: 1
      }
    }
  }
}

const CompA = {
  mixins: [Mixin],
  data() {
    return {
      user: {
        id: 2
      }
    }
  }
}
// vue 2.x에서 $data 결과는
{
  user: {
    id: 2,
    name: 'Jack'
  }
}
// 3.0에서 결과는 다음과 같다
{
  user: {
    id: 2
  }
}
```

### 마이그레이션 방법
객체 선언에 의존하는 사용자의 권장사항
* 공유 데이터를 외부 객체에 추출하여 `data`의 속성으로 사용
* 새 공유 객체를 가리키도록 공유 데이터에 대한 참조를 다시 작성

mixin의 깊은 병합(deep merge)에 의존하는 사용자의 경우, 
mixin의 깊은 병합이 매우 암시적이고 코드 로직의 이해도와 디버깅이 어렵게 만들 수 있기 때문에, 
이러한 의존성을 피하기 위해 코드를 리팩토링하는 것이 좋다.