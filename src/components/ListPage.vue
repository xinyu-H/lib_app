<template>
    <div class="listPage">
        <h4>我是 lib_app 里的组件</h4>
        <li v-for="(v, i) in list">
            <span>{{ i+1 }}</span>
            <span>{{ v.name }}</span>
            <span>{{ v.age }}</span>
        </li>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const list = ref<Array<{
    name: string;
    age: number
}>>([{
    name: "侯侯",
    age: 23
},{
    name: "李",
    age: 23
},{
    name: "王",
    age: 23
}])
</script>

<style scoped>
    .listPage{
        border: 1px solid #aaa;
    }
</style>