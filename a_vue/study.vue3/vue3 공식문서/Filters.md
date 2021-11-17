## Filters

Filters는 Vue 3.0에서 제거되며 더 이상 지원하지 않는다.

### 2.x 구문
2.x 버전에서는 텍스트 형식화(common text formatting)을 할 수 있는 filters를 사용할 수 있다.

```js
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ accountBalance | currencyUSD }}</p>
<template>

<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        requeired: true
      }
    },
    filters: {
      currencyUSD(value) {
        return '$' + value
      }
    }
  }
</script>
```
위의 방식은 편리해 보이지만, 중괄호 보간법 안의 표현식이 "그냥 자바스크립트"라는 전제를 깨는 커스텀 구문이 필요하고,
이는 filters를 배우고 적용하는데에 비용이 들게한다.


### 3.x 변경점
3.x 버전에서는 filter는 삭제되었고 더이상 지원하지 않는다.
대신에 method 호출이나 computed속성으로 대체 하도록 권장한다.

다음은 filters대신에 computed 속성을 적용해 구현한 예시
```js
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ accountBalance | currencyUSD }}</p>
<template>
<script>
  export default {
    props: {
      accountBalance: {
        type: Number,
        required: true
      }
    },
    computed: {
      accountUSD() {
        return '$' + this.accountBalance
      }
    }
  }
</script>
```

### 마이그레이션 방법
filters 대신 methods나 computed 속성 사용을 권장한다.

전역 filters
애플리케이션에 filters를 전역적으로 등록하고 사용하는 경우, 각각의 컴포넌트에서 computed 속성이나 methods로 대체하는 것은 불편할 수 있다.
대신 globalProperties를 통해 모든 컴포넌트에 전역 filters를 사용할 수 있다.

```js
// main.js
const app = createApp(App)
app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}
```
그런다음에 다음과 같이 $filters 객체를 사용하여 모든 템플릿을 수정할 수 있다.
```html
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ $filters.currencyUSD(accountBalance) }}</p>
<template>
```
이 접근방식에서는 computed 속성이 아닌 methods만 사용할 수 있다.
후자는 개별 컴포넌트의 컨텍스트에서 정의된 경우에만 의미가 있다.