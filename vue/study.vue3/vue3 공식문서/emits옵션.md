## emits 옵션

Vue3은 이제 기존 Props 옵션에 유사한 emits 옵션을 제공한다. 이 옵션은 컴포넌트가 부모에게 emit할수 있는 이벤트를 정의하는데 사용할 수 있다.




### 2.x동작
Vue 2에서는 컴포넌트가 받는 props를 정의할 수 있지만, 어떤 이벤트를 emit할 수 있는지 선언할 수 없다.
```javascript
<template>
  <div>
    <p>{{ text }}</p>
    <button v-on:click="$emit('accepted')">OK</button>
  </div>
</template>
<script>
  export default {
    props: {'text'}
  }
</script>
```


### 3.x 동작
props와 유사하게 컴포넌트가 생성하는 이벤트는 이제 emits 옵션으로 정의할 수 있다.
```javascript
<template>
  <div>
    <p>{{ text }}</p>
    <button v-on:click="$emit('accepted')">OK</button>
  </div>
<template>
<script>
  export default {
    props: ['text'],
    emits: ['accepted']
  }
</script>
```
이 옵션은 또한 `props`에 정의된 validation와 유사하게, 
emit된 이벤트와 함께 전달되는 인자에 대한 validation를 개발자가 정의할 수 있도록 객체를 허용한다.


### 마이그레이션 방법
emits를 사용하며 각 컴포넌트에서 내보낸 모든 이벤트를 문서화 하는것이 좋다.
이는 `.native` 지시어가 제거되었기 때문에 특히 중요하다.
이제 emits로 선언되지 않은 이벤트의 모든 리스너는 컴포넌트의 $attrs에 포함되며, 기본적으로 컴포넌트의 루트 노드에 바인딩 된다.

예시
- 네이티브 이벤트를 부모에게 다시 내보내는 컴포넌트의 경우 이제 2가지 이벤트가 발생한다.
```vue
<template>
  <button v-on:click="$emit('click', $event)">OK</button>
</template>
<script>
  export default {
    emits: [] // 선언된 event 없이
  }
</script>
```
부모가 컴포넌트에서 click이벤트를 받는경우
```javascript
<my-button v-on:click="handleClick"></my-button>
```
이제 두번 트리거 된다.
* $emit()에서 한번
* 루트 엘리먼트에 적용된 네이티브 이벤트 리스터에서 한 번.

여기 2가지 옵션이 있다.
1. `click`이벤트를 올바르게 선언하기. 이는 실제로 `<my-button>`에서 해당 이벤트 핸들러에 로직을 추가하는 경우에 유용하다.
2. 이제 부모가 `.native`를 추가하지 않고도 네이티브 이벤트를 쉽게 수신할 수 있으므로, 이벤트의 재방출(re-emit)을 제거한다. 
어쨌든 이벤트를 실제로 다시 내보낼 때 적합하다.