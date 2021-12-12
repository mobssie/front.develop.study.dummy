## reactive


vue 2
- reactive 은 vue.observeable
- 반환된 상태는 반응형 객체
- 반응형 변환은 deep

- 컴포넌트의 객체를 반환할때 dependncy tracking()에 의해 반응형을 만들어진다.


```js
import { reactive, toRefs } from 'vue'

const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: '당신은 지금 바로 이 책을 읽습니다  ;)',
  price: '무료'
})

let { author, title } = toRefs(book);


title.value = 'Vue 3 상세 Guide' // title 이 ref 이므로 .value 를 사용해야 한다.
console.log(book.title) // 'Vue 3 Detailed Guide'
```








[https://v3.ko.vuejs.org/guide/reactivity-fundamentals.html#%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC%E1%84%92%E1%85%A7%E1%86%BC-%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%E1%84%8B%E1%85%B4-%E1%84%8C%E1%85%A5%E1%86%B8%E1%84%80%E1%85%B3%E1%86%AB]