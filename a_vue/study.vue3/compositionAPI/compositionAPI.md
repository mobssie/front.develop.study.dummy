## Composition API

setup
컴포넌트가 생성되기 전에 props를 반환(resolved)되면 실행되는 컴포넌트 옵션으로 composition API의 진입점 역활을 한다.

* 전달 인자:
{Data} props
{SetupContext} context

* 작성법
```javascript
interface Data {
  [key: string]: unknown
}

interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
}

function setup(props: Data, context: SetupContext): Data
```

### Tip
```
setup()에 전달된 인자에 대한 타입을 추론하려면, defineComponent를 사용해야 한다.
```

예시
템플릿 사용:
```javascript
<!-- MyBook.vue -->
<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    // 템플릿에 노출
    return {
      readersNumber,
      book
    }
  }
}
</script>
```

렌더 함수 사용:
```javascript
// Mybook.vue
import { h, ref, reactive } from 'vue'

export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    // 참조값 (ref value)을 명시적으로 노출해야한다.
    return () => h ('div', [readersNumber.value, book.title])
  }
}
```

### 라이프 사이클 훅(Lifecycle Hooks)
라이프사이클 훅은 import를 사용하여 직접적으로 onX함수에 등록할 수 있다.
```javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'
const MyComponent = {
  setup() {
    onMounted(() => {
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
```

이러한 라이프 사이클 훅 등록 함수는 내부 전역에 의존하여 현재 활성 인스턴스( setup() 이 지금 호출되는 컴포넌트 인스턴스)를 찾기 때문에 setup() 중에 동기식으로만 사용할 수 있다. 현재 활성 인스턴스없이 호출하면 오류가 발생한다.
컴포넌트 인스턴스 컨텍스트는 라이프사이클 훅의 동기 실행중에도 설정된다. 결론적으로 라이프사이클 훅 내에서 동기적으로 생성된 감시자(watchers)와 계산된 속성(computed properties)도 컴포넌트가 마운트 해제될 때 자동으로 해제된다.

* 옵션 api라이프사이클 옵션과 Composition API간의 매핑
  * beforeCreate -> setup() 사용
  * create -> setup() 사용
  * beforeMount -> onBeforeMount
  * mounted -> onMounted
  * beforeUpdate -> onBeforeUpdate
  * updated -> onUpdated
  * beforeUnmount -> onUnmounted
  * unmounted -> onUnmouted
  * errorCaptured -> onErrorCaptured
  * renderTracked -> onRenderTracked
  * renderTriggered -> onRenderTriggered

### Provide / Inject
provide 및 inject는 종속성 주입을 활성화 한다. 둘 다 현재 활성 인스턴스로 setup()동안만 호출 할 수 있다.
* 작성법
```javascript
interface InjectionKey<T> extends Symbol ()

function provide<T>(key: InjectionKey<T> | string, value: T) : void

// 기본값 없는 경우
function inject<T>(key: InjectionKey<T> | string, value: T) : T | undefined
// 기본값 있는 경우
function inject<T>(T)(key: Injectionkey<T> | string, defaultValue: T) : T
```

Vue는 Symbol을 확장하는 일반유형인 Injectionkey 인터페이스를 제공한다. 공급자(provide)와 소비자(consumer)간에 삽입된 값의 유형을 동기화 하는데 사용
```javascript
import { Injectionkey, provide, inject } from 'vue'

const key: InjectionKey<string> = Symbol()

provide(key, 'foo') // 문자열이 아닌 값을 제공하면 오류가 발생한다.

const foo = inject(key) // foo의 타입: string | undefined
```

문자열 키(string keys) 또는 형식화 되지 않은 심볼(non-typed symbols)을 사용하는 경우 삽입된 값의 타입을 명시적으로 선언해야한다.
```javascript
const foo = inject<string>('foo') // string | undefined
```


### getCurrentInstance
