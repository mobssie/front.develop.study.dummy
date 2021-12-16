## toRefs

- setup()함수 안에서는 위에 등록된 props를 this.props와 같이 가져다 쓸 수 없다.
props를 가져와 개발할 때는 toRefs()를 쓴다.
**toRefs는 ref를 여러번 해주는 함수이다.**

등호 왼쪽에 {props 이름1, props 이름2}
그러면 props이름.value라고 찍으면 props가 나옴.

```js
<script>
import {toRefs} from 'vue';
export default {
    name : 'Container',
    props : {
        one : Number,
    },
    setup(props){
        let { one } = toRefs(props);
        console.log(one.value) // 1
    },
}
</script>
```
