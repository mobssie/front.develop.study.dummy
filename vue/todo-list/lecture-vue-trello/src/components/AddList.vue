<template>
    <div class="add-list">
        <input v-if="isAddList" type="text" class="form-control" v-model="inputTitle" ref="inputTitle" @blur="restore" @keyup.enter="onSubmitTitle">
        <a v-else href="" @click.prevent="onAddList">&plus; Add antoher list</a>
    </div>
</template>

<script>
import  {mapState, mapAction} from 'vuex'
export default {
    data() {
        return {
            isAddList: false,
            inputTitle: ''
        }
    },
    computed: {
        ...mapState({
            baord: 'board'
        })
    },
    methods: {
        ...mapAction ([
            'ADD_LIST'
        ]),
        onAddList() {
            this.isAddList = true
            this.$nextTick(() => this.$refs.inputTitle.focus())
        },
        restore () {
            this.isAddList = false
            this.inputTitle = ''
        },
        onSubmitTitle() {
            this.inputTitle = this.inputTitle.trim()
            if (!this.inputTitle) return this.restore()

            const title = this.inputTitle
            const boardId = this.board.id
            const lastList = this.board.lists[this.board.lists.length - 1]
            const pos = lastList ? lastList.pos * 2 : 65535
        }
    }
}


</script>

<style>
.add-list {
    background-color: rgba(0,0,0, .1);
    padding: 12px;
    color:#ddd;
    transition: all 0.3s;
}
.addlist a {
    color: #ddd
}
.add-list:hover,
.add-list:focus{
    background-color: rgba(0.0.0,.3);
}
</style>
