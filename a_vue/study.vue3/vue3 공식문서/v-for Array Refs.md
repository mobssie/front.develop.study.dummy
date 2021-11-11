## v-for Array Refs

*Vue 2*에서 v-for에 ref 속성을 사용하면 해당 $refs 프로퍼티는 참조 배열을 갖게 된다. 중첩된 v-for가 있는 경우, 이 동작은 모호하고 비효율적이다.

*Vue 3*에서는 더이상 Vue 2와 같이 $refs에 배열을 자동으로 생성하지 않는다. 단일 바인딩에서 여러 참조를 다루려면, ref를 함수에 바인딩을 해야한다. 함수는 더 많은 유연성을 제공한다. 
```javascript
<div v-for="item in list" :ref="setItemRef"></div>
```

Options API:
```javascript
export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      this.itemRefs.push(el)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}
```

Composition API:
```javascript
import {ref, onBeforeUpdate, onUpdated} from 'vue';
export default {
  let itemRefs = []
  const setItemRef = el => {
    itemRefs.push(el)
  }
  onBeforeUpdate(() => {
    itemRefs = []
  })
  onUpdated(() => {
    console.log(itemRefs)
  })
  return {
    itemRefs,
    setItemRef
  }
}
```

유의 사항
itemRefs는 꼭 배열이 아니어도 된다. 반복 key로 참조가 설정된 객체일 수도 있다.
필요한 경우, itemRefs를 반응형으로 만들고 변경을 감지할 수 있다.