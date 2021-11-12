## children

**$children 인스턴스 속성은 Vue 3.0에서 제거 되었으며 더이상 지원되지 않는다.**

### 2.x 문법
2.x에서 개발자는 this.$children을 사용하여 현재 인스턴스의 하위 컴포넌트에 대해 직접 접근할 수 있었다.

```vue
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <my-button>Change logo</my-button>
  </div>
</template>

<script>
import MyButton from './MyButton'

export default {
  components: {
    MyButton
  },
  mounted() {
    console.log(this.$children) // [VueComponent]
  }
}
</script>
```


### 3.x 업데이트
3.x에서는 $children 속성이 제거되어 더이상 지원되지 않는다. 
*대신 하위 컴포넌트 인스턴스에 접근 해야하는 경우 $refs를 사용하는 것이 좋다.* 