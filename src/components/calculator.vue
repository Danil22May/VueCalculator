<script setup>

</script>

<template>
   <div class="calculator">
      <div class="screen"></div>
      <div class="switch-container">
         <div class="switch">Money Exchange</div>
         <div class="switch">Weather</div>
      </div>
      <div class="buttons">
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
   </div>
</template>

<style lang="scss" scoped>
$background-primary: hsl(0, 1%, 35%);

.calculator {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   // align-items: flex-end;
   background-color: #d9d9d9;
   border-radius: 25px;
   border: 1px solid black;
   gap: 19px;
   padding: 20px;
   width: 400px;
   height: 600px;
}

.btn {
   background-color: $background-primary;
   color: white;
   font-size: 24px;
   height: 80px;
   width: 80px;
   text-align: center;
   font-size: 60px;
   cursor: pointer;
}

.switch-container {
   display: flex;
   gap: 50px;
   cursor: pointer;
}

.switch {
   background-color: #959595;
   color: white;
   border-radius: 15px;
   padding: 15px;
}

.screen {
   background-color: #959595;
   color: rgb(46, 46, 46);
   height: 100px;
   width: 350px;
}

.operator {
   background-color: hsl(32, 81%, 52%);
   color: rgb(46, 46, 46);
   font-weight: bold;
}


.buttons {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 15px;
   margin-bottom: 15px;
}
</style>