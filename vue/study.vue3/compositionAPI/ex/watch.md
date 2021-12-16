## watch

옵션을 user 사용하여 컴포넌트 내부의 속성에 대한 감시자를 설정하는 것과 마찬가지로 Vue에서 가져온 함수를
watch 사용하여 동일한 작업을 수행할 수 있다.
watch 3개의 인수를 허용한다.
- 반응형 참조 또는 우리가보고 싶은 것을 getter 함수 (지켜볼 대상)
- 콜백
- 선택적 구성 옵션
```js
import { ref, watch } from 'vue'

const counter = ref(0)
watch(counter, (newValue, oldValue) => {
  console.log('The new counter value is: ' + counter.value)
})
```

counter가 수정될 때마다 counter.value = 5 시계는 이 경우는 'The new counter value is: 5'
콘솔에 로그인하는 콜백(두 번째 인수)를 트리거하고 실행한다.


해당하는 옵셔널 API
```js
export default {
  data() {
    return {
      counter: 0
    }
  },
  watch: {
    counter(newValue, oldValue) {
      console.log('The new counter value is: ' + this.counter)
    }
  }
}
```

**COMPOSION API 적용사례**
```js
// src/components/UserRepositories.vue `setup` function
import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch, toRefs } from 'vue'

// in our component
setup (props) {
  // user `toRefs` to create a Reactive Reference to the `user` property of `props`
  const { user } = toRefs(props)

  const repositories = ref([])
  const getUserRepositories = async () => {
    // update `props.user` to `user.value` to access the Reference value
    repositories.value = await fetchUserRepositories(user.value)
  }
  onMounted(getUserRepositories)

  // set a watcher on the Reactive Reference to user prop
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}

```

toRefs은 감시자가 user 소품에 대한 변경 사항에 반응하도록 하기 위한것이다.
이러한 변경 사항을 적용하여 첫번째 노리적 문제 전체를 한곳으로 옮겼다.


## watch와 watchEffect의 차이
* watch는 특정 데이터가 변경되었을때 실행, 새로운 데이터와 이전의 데이터를 가져옴 (lazy) ??
* watchEffect: 의존성이 있는 데이터에 대해서 즉각적으로 실행 (immediately)

### watch
* 특정 반응 속성을 보고 싶거나, old value를 보고 싶을 때 활용
* 함수 또는 하나 이상의 반응 속성을 감시할 수 있다.
* reactive 종속성이 변경될 때만 실행된다

### watchEffect
* watch의 단순화 버전
* 함수만을 값으로 가진다.
* 정의되거나 reactived의 종속성이 변경될 때 즉시 동작한다.
* 여러 반응 속성을 감시하고 싶고, 이전 값에 신경을 쓰지 않을 때 사용된다.
* computed() hook 처럼 동작한다.
* 함수 내부에 있는 여러 반응값을 관찰해야 할 때마다 사용하고 그 중 하나가 업데이트 될 때마다 반응한다.