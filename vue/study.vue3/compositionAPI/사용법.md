## setup

- setup 훅 내부에 data와 function을 구성한다.
이때 구성되는 data는 아직 반응형이 아니다.

```js
export default {
  name: 'HOME',
  setup() {
    // 데이터를 ref, reactive로 감싸면 반응형으로 바뀐다.
    const person1 = ref({ name: 'nkh', age: 29 });
    const person2 = reactive({ name: 'nki', age: 26 })

    const handleClick = () => {
      // ref로 감싼 값을 변경할 때는 value로 한번 들어가주고 값을 바꾼다.
      person1.value.age = 30;

      // reactive는 바로 값을 바꾼다.
      person2.age = 30;
    }
  };

  // ref값은 return을 거치게되면 person1.value.age는 person1.age로 바뀐다.
  // (template에서는 person1.age로 사용한다.)

  return { person, handleClick };
}
```

## ref, reactive 차이
1. ref는 function에서 값을 변경할 때 ref.value를 넣어주고 값을 바꾸나 reactive는 바로 값을 바꿀 수 있다.
2. reactive는 원시 값에 대애서는 반응형을 가지지 않는다. (string, number 값은 값을 바꿔어도 reactive하게 리렌더링 되지 않는다.)
그래서 **객체나 배열을 사용하는 경우에만 reactive**를 사용할 수 있다. 그러나 ref는 원시값도 반응형 값으로 취급되어 리렌더링 한다.
3. reactive는 원시값을 반응형으로 사용되지 않기 때문에 ref를 처음부터 끝까지 사용하는 것이 좋은거같음.


## computed & watch
vue2의 computed, watch와 사용법이 동일하다.

## watchEffect
react의 useEffect와 사용법과 유사
watchEffect 내부에 사용된 변수가 바뀌면 watchEffect가 실행된다.

```vue
<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from 'vue'
export default {
  name: 'HOME',
  setup() {
    const search = ref('')
    const names = ref(["qq", "aa", "zz", "dd"])

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    })
    
    watch(search, () => {
      "search 값이 바뀔 때 마다 실행되는 함수"
    });

    watchEffect(() => {
      console.log(
        "search value가 정의됬기에 search가 바뀔때마다 실행된다."
        search.value
      );
    })

    return { names, search, matchingNames }
  }
}
</script>
```

#### watch, watchEffect 중지
watch, watchEffect가 변수에 변화함에 따라 계속 호출되는 것을 막을 수 있다.
watch, watchEffect 함수를 변수로 지정하고, 해당 변수를 실행하면, watch, watchEffect는 중지된다.
```vue
<template>
  <div class="home">
    <input type="text" v-model="search" />
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from 'vue'
export default {
  name: 'HOME',
  setup() {
    const search = ref('')
    const names = ref(["qq", "aa", "zz", "dd"])

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value));
    })
    
    const stopWatch = watch(search, () => {
      "search 값이 바뀔 때 마다 실행되는 함수"
    });

    const stopWatchEffect = watchEffect(() => {
      console.log(
        "search value가 정의됬기에 search가 바뀔때마다 실행된다."
        search.value
      );
    })

    const handleClick = () => {
      stopWatch();
      stopWatchEffect()
    }

    return { names, search, handleClick, matchingNames }
  }
}
</script>
```


### props
부모 컴포넌트에서 props를 내릴 경우 사용하는 방법
props는 상위에서 어떤 props를 받을 것이지 알려준 후, setup에서 props.xxx로 접근한다.

home -> postList로 props를 내리고 postList에서 props를 받아 사용하는 법, 
그리고 home에서 postList컴포넌트를 사용하는 방법에 대한 예시




#### Home (parent component)
```vue
<template>
  <div class="home">
    <!-- child 컴포넌트에게 props 내림 -->
    <PostList :posts="posts" />
  </div>
</template>
<script>
  // 사용할 컴포넌트 import
  import PostList from '../components/PostList.vue'
  import { ref } from 'vue'

  export default {
    name: 'Home'
    // 사용할 컴포넌트를 넣어준다.
    component: { PostList },

    setup() {
      const ports = ref([
        {title: '1번 타이틀', body: '1번 제목', id: 1},
        {title: '2번 타이틀', body: '2번 제목', id: 2},
      ])

      return { posts }
    }
  }
</script>
```
#### Posts (child components)
```vue
<template>
  <div>
    {{ post.title }}
    {{ post.body }}
  </div>
</template>
<script>
export default {
  // 사용할 props를 배열내에 정의한다.
  props: ["posts"],
  setup(props) {
    console.log(props.posts); // 받은 prop 사용가능
  }
}
</script>
```

life-cycle
setup 함수 내에서도 라이플사이클 훅을 사용할 수 있다.
옵션 api 라이플사이클 명칭에서 on을 앞에 붙이면 된다.

```
mounted -> onMounted
unmounted -> onUnmounted
updated -> onUpdated
```
```js
<template>
  <div>
    {{ post.title }}
    {{ post.body }}
  </div>
</template>
<script>
export default {
  // 사용할 props를 배열내에 정의한다.
  props: ["posts"],
  setup(props) {
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component unMounted'))
    onUpdated(() => console.log('component onUpdated'))
    console.log(props.posts) // 받은 prop 사용가능
  }
}
</script>
```
composition api밑에 옵션 api 라이플사이클 훅을 동시에 사용 하면 두 동일한 함수가 2번 호출된다.

### utils 함수 재사용 (composable)
기존 vue2에서는 재사용을 위한 함수를 mixins에 포함시켜 사용하였다.
mixins에 함수가 추가될 때마다 더욱 데이터 추적이 어려웠기에 확장성이 매우 불리하였다.

composition api를 사용함으로 재사용하는 Util 함수를 import export 가능하게 되었고 좀 더 데이터 추적 및 사용하기 쉽게 변경되었다.

아래는 getPosts라는 utils 함수를 만들고 사용할 컴포넌트에서 사용하는 예시이다.
vue3에서는 composable이라고 부른다.






src/composables/getPosts.js
이 함수는 여러 컴포넌트에서 재사용이 가능하다.
만약 ref가 아닌 reactive를 사용한다면 return 부분에서 toRefs로 감싸줘야 반응성이 유지된다.
```js
import { ref } from 'vue'
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // 예시 api
      let res = await fetch('http://localhost:3000/posts')
      if (!res.isSuccess) {
        throw.Error('fail')
      }
      posts.value = await res.json()
    } catch (err) {
      error.value = err.message;
    }
  }

  return { post, err, load }
}

export default getPosts;
```

#### Home (composalbes 함수 사용하는 컴포넌트)
```js
<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :post="posts" />
    </div>
    <div v-else>loading...</div>
  </div>
</template>
// 사용할 컴포넌트 imports
import PostList from '../components/PostList.vue'
import getPost from '../components/getPosts'

export default {
  name: 'Home',
  components: { PostList },

  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error }
  }
}
```