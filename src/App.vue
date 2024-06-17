<script setup>
import Calculator from "@/components/Calculator.vue";
import Meteo from "@/components/Meteo.vue";

</script>

<template>

  <div class="container">
    <!-- <Meteo /> -->
    <Calculator />
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