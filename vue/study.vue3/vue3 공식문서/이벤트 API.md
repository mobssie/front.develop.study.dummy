## 이벤트 API

`$on`, `$off` 그리고 `$once` 인스턴스 메소드가 제거되었다. 
애플리케이션 인스턴스는 더이상 이벤트 방출 인터페이스(Event emitter interface)를 구현하지 않는다.

### 2.x 구문
2.x에서는 Vue 인스턴스가 이벤트 emitter API($on, $off, $once)를 통해 명령직으로 연결된 핸들러를 트리거할 수 있었다.
이는 전체 애플리케이션에서 접근 가능한 전역 이벤트 리스너를 만들도록 이벤트 허브를 생성하는데 사용되었다.
```js
// eventHub.js
const eventHub = new Vue()

export default eventHub
```
```js
import eventHub from './eventHub'

export default {
  mounted() {
    // eventHub listener 등록
    eventHub.$on('custom-event', () => {
      console.log('Custom event triggered!')
    })
  },
  beforeDestroy() {
    // eventHub listerener 제거
    eventHub.$off('custom-event')
  }
}
```
```js
// ParentComponent.vue
import eventHub from './eventHub'

export default {
  methods: {
    callGlobalCustomEvent() {
      eventHub.$emit('custom-event') // ChildComponent가 마운트 되면, 콘솔에서 message에 접근할 수 있다.
    }
  }
}
```


### 3.x 변경점
인스턴스에서 $on, $off 그리고 $once 메소드를 완전히 제거했다. 
$emit은 부모 컴포넌트에 의해 선언적으로 연결된 이벤트 핸들러를 트리거하는데 사용되므로 여전히 API의 일부로 존재한다.


### 마이그레이션 방법
mitt나 tiny-emitter와 같은 이벤트 방출 인터페이스(Event emitter interface) 구현 외부 라이브러리를 이용하여 기존 이벤트 허브를 대체할 수 있다.