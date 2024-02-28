<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Login from './pages/login.vue';
</script>

<template>
  <!-- <div>2</div> -->
  <div>简单模拟请求</div>
  <Login />
  <!-- <HelloWorld msg="2" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
