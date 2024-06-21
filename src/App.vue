<script setup>
import calculator from "@/components/calculator.vue";
</script>

<template>

  <div class="container">
    <calculator />
  </div>

</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 10px solid black;
  height: 100vh;
}
</style>