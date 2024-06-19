<script setup>
import { ref } from 'vue';
import Meteo from './Meteo.vue';
import Money from './Money.vue';

const openMeteo = ref(false);
const openMoney = ref(false);

function openWeather() {
   !openMeteo.value ? openMeteo.value = true : openMeteo.value = false;
}

function openExchange() {
   !openMoney.value ? openMoney.value = true : openMoney.value = false;
}

let acumulador = ref('');
function append(numb) {
   acumulador.value += numb;
}

function clear() {
   acumulador.value = '';
}

function calc() {
   acumulador.value = eval(acumulador.value);
}
</script>

<template>
   <div class="calculator">
      <div class="screen-container">
         <Money v-if="openMoney" /> 
         <Meteo v-if="openMeteo" />  

         <div class="screen">
            {{ acumulador }}
         </div>
      </div>

      <div class="switch-container">
         <div class="switch" @click="openExchange">Money Exchange</div>
         <div class="switch" @click="openWeather">Weather</div>
      </div>

      <div class="buttons">
         <div @click="append('7')" class="btn">7</div>
         <div @click="append('8')" class="btn">8</div>
         <div @click="append('9')" class="btn">9</div>
         <div @click="append('+')" class="btn operator">+</div>

         <div @click="append('4')" class="btn">4</div>
         <div @click="append('5')" class="btn">5</div>
         <div @click="append('6')" class="btn">6</div>
         <div @click="append('-')" class="btn operator">-</div>

         <div @click="append('3')" class="btn">3</div>
         <div @click="append('2')" class="btn">2</div>
         <div @click="append('1')" class="btn">1</div>
         <div @click="append('*')" class="btn operator">*</div>

         <div @click="clear" class="btn operator">C</div>
         <div @click="append('0')" class="btn">0</div>
         <div @click="calc" class="btn operator">=</div>
         <div @click="append('/')" class="btn operator">/</div>
         <div @click="append('.')" class="btn operator">.</div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
$background-primary: hsl(0, 1%, 35%);

.meteo-container {
   display: flex;
   justify-content: center;
   width: 100%;
}

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
   height: 650px;
}

.btn {
   background-color: $background-primary;
   color: white;
   font-size: 24px;
   height: 70px;
   width: 70px;
   text-align: center;
   font-size: 45px;
   cursor: pointer;
}

.btn:hover {
   background-color: hsl(0, 1%, 25%);
}

.switch-container {
   display: flex;
   gap: 50px;
}

.switch {
   background-color: #959595;
   color: white;
   border-radius: 15px;
   padding: 15px;
   cursor: pointer;
}

.screen {
   background-color: #959595;
   color: rgb(46, 46, 46);
   height: 100px;
   width: 350px;
   font-size: 70px;
   text-align: right;
   padding: 10px;
   border-radius: 15px;
}

.operator {
   background-color: hsl(32, 81%, 52%);
   color: rgb(46, 46, 46);
   font-weight: bold;
}

.operator:hover {
   background-color: hsl(32, 81%, 36%);
}

.buttons {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 15px;
   margin-bottom: 15px;
}

.screen-container {
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #959595;
   border-radius: 15px;
   // justify-content: center;
}
</style>