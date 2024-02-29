<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Login from './pages/login.vue';

import { RouterView } from "vue-router"

</script>

<template>
   <!-- <div>
        <p>
          简单模拟请求
        </p>
       <Login />
      </div>
      <router-view/>  -->
   <RouterView v-slot="{ Component }">
    <transition name="slide-right" :duration="200">
      <component :is="Component" />
    </transition>
  </RouterView>
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
