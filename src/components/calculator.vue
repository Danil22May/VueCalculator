<script setup>

</script>

<template>
   <div class="calculator">
     <div id="screen"></div>
     <div class="btn">7</div>
     <div class="btn">8</div>
     <div class="btn">9</div>
     <div class="btn operator">+</div>

     <div class="btn">4</div>
     <div class="btn">5</div>
     <div class="btn">6</div>
     <div class="btn operator">-</div>

     <div class="btn">3</div>
     <div class="btn">2</div>
     <div class="btn">1</div>
     <div class="btn operator">*</div>

     <div class="btn operator">C</div>
     <div class="btn">0</div>
     <div class="btn operator">=</div>
     <div class="btn operator">/</div>
   </div>
</template>

<style lang="scss" scoped>
.btn {
 background-color: grey;
 color: white;
 font-size: 24px;

 .calculator {
    display: flex;    
 }
}

</style>