<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
    <template>
      <div>평균 시간: {{average}}ms</div>
      <button @click="onReset">리셋</button>
      <!-- 
        v-show : 태그가 있고 display:none처리
        v-if : 태그자체가 없다.
        template : 없는 태그!
      -->
    </template>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요.',
      };
    },
    computed: {
      average() {
        return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
      }
    }, // 데이터 계산은 computed에서 하는것이 좋음.
    // 캐싱된 메모리로 사용되서 빠르다~
    methods: {
      onReset() {
        this.result = [];
      },
      onClickScreen() {
        if (this.state === 'waiting') {
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요.'
          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭';
            startTime = new Date();
          }, Math.floor(Math.random() * 2000))
        } else if ( this.state === 'ready') {
          clearTimeout(timeout)
          this.state = 'now';
          this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
          
        } else if (this.state === 'now') {
          endTime = new Date();
          this.state = 'waiting';
          this.message = '클릭해서 시작하세요.';
          this.result.push(endTime - startTime);
        }
        // if (this.state === 'waiting') {
        //   this.state = 'ready';
        //   this.message = '초록색이 되면 클릭하세요.';
        //   timeout = setTimeout(() => {
        //     this.state = 'now';
        //     this.message = '지금 클릭!';
        //     startTime = new Date();
        //   }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
        // } else if (this.state === 'ready') {
        //   clearTimeout(timeout);
        //   this.state = 'waiting';
        //   this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
        // } else if (this.state === 'now') {
        //   endTime = new Date();
        //   this.state = 'waiting';
        //   this.message = '클릭해서 시작하세요.';
        //   this.result.push(endTime - startTime);
        // }
      }
    },
  };
</script>

<style scoped>
  #screen {
     width: 300px;
     height: 200px;
     text-align: center;
     user-select: none;
   }
  #screen.waiting {
    background-color: aqua;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: greenyellow;
  }
</style>
