## composition api는 vuex를 대체 할수 있나.



composition api를 사용 함으로써 global 함수 및 변수를 사용 가능하게 되었다.
그래서 vuex를 대체 가능한 것이 아닌가?

아래 예시로 compositon api 기능이 어떻게 vuex의 전역 기능을 대체 가능한 것인지 알아보자.

먼저 글로벌 변수를 만든다.



### src/global.js
```js
import { reactive, readonly } from 'vue'

const state = reactive({
  count: 0
})

const increament = () => state.count++

export default { state: readonly(state), increment }
```


### src/main.js
```js
import { createApp } from 'vue'
import global from '@/global'

const app = createApp({
  provide: {
    global
  }
})
```

### inject하여 컴포넌트에서 global 접근 예시
src/components/Test.vue
```vue
<template>
  <div>
    {{ global.state.count }}
    <button @click="global.increment">증가</button>
  </div>
</template>
<script>
  export default {
    inject: ["global"]
  }
</script>
```





### 그럼에도 vuex를 사용해야하는 이유

디버깅
vuex를 이용하여 데이터를 변경하면 vue devtools에 의하여 데이터가 어떤 함수와 컴포넌트에 의해 변경되는지 추적이 가능하다.
디버깅을 용이하게 한다는 것만으로도 충분히 사용할 가치가 있다. 
(만약 component api가 devtools에서 디버깅 지원한다면 말이 달라진다.)


플러그인
vuex의 또다른 장점을 많은 플러그인이 지원된다. 
대표적으로 vuex-persisted(새로고침 초기화 방지- 옵션 가능.)