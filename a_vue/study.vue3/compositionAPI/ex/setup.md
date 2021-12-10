
```js
// src/components/UserRepositories.vue
import { fetchUserRepositories } from '@/api/repositores'
import { ref, onMounted } from 'vue'

// in our component
setup (props) {
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositores.value = await fetchUserRepositories(props.user)
  }

  onMounted(getUserRepositories) // on 'mounted' call `getUserRepositories`

  return {
    repositories,
    getUserRepositories
  }
}
```