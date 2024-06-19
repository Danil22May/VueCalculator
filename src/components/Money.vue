<script setup>
</script>
<template>
     <div class="container-money">
           <div class="cant-moneda1">
            <input type="number" id="moneda1">
           </div>
           <select class="type-moneda2">
              <option value="Euro">Euro</option>
              <option value="Lempiras">Lempiras</option>
              <option value="Euro">Dolar</option>
              <option value="Yen">Yen</option>
           </select>
           
           <div class="cant-moneda2">
            <input type="number" id="moneda2">
           </div>
           <select class="type-moneda2">
              <option value="Euro">Euro</option>
              <option value="Lempiras">Lempiras</option>
              <option value="Euro">Dolar</option>
              <option value="Yen">Yen</option>
           </select>
     </div>
</template>

<style lang="scss" scoped>

.container-money{
    display: flex;
    width: 95%;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    background-color: rgb(7, 130, 73);
    border-radius: 10px;
}

input{
    width: 100px;
}

</style>