<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

  <div class="container">
    <calculator />
  </div>

  <main>
    <TheWelcome />
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 10px solid black;
  height: 100vh;
}
</style>
