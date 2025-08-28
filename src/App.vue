<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <div class="wrapper">
    <div class="tab-box" :class="{cats: route.path === '/cats'}">
      <nav class="tabs">
        <RouterLink to="/" :class ="{ active: route.path === '/'}">Home</RouterLink>
        <RouterLink to="/cats" :class ="{ active: route.path === '/cats'}">Cats</RouterLink>
      </nav>
      <Transition name="fade" mode="out-in">
        <RouterView />
      </Transition>
    </div>
  </div>
</template>

<style>
h1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 0 auto;
}
.tabs a {
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;
}
.tabs a.active {
  background: white;
  color:#333;
}
.tab-box {
  background: #1e1e1e;
  color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  width: 600px;
  min-height: auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease !important;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.cats {
  background-color: rgb(255, 196, 85);
}
</style>