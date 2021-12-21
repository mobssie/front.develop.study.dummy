## computed

vue2
```js
computed: {
  spaceLeft() {
    return this.capacity - this.attending.length
  }
}
```

vue3
```js
const spaceLeft = computed(() => {
    return capacity.value - attending.value.length;
  })
```