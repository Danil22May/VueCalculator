<script setup>
import { onMounted, reactive, ref } from 'vue';
let response = ref({});
let json = reactive({});
const city = ref("");
let municipio = ref({});
let temperatures = ref("");
onMounted(async () => {
    response = await fetch(`https://www.el-tiempo.net/api/json/v2/provincias/33`);
    json = await response.json();
})
function updateCity() {
    const foundCity = json.ciudades.find(element => element.name === city.value)
    if (foundCity) {
        municipio.value = foundCity;
        temperatures.value = municipio.value.temperatures.max;
    } else {
        municipio.value = null;
        temperatures.value = "";
    }
}
// console.log(municipio.value.name)
</script>

<template>
    <div class="Meteo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z" />
        </svg>
        <div v-if="temperatures" class="weather-text"> {{ municipio.name }} <span>{{ temperatures }} C</span></div>
        <input @input="updateCity" v-model="city" type="text" name="city" id="city" placeholder="Enter your city">
        <!-- {{ municipio.name }} -->




    </div>
</template>


<style lang="scss" scoped>
.Meteo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6b6b6b;
    height: 50px;
    width: 350px;
    padding: 10px;
    border-radius: 7px;

    svg {
        height: 45px;
    }

    input {
        height: 90%;
        border-radius: 7px;
        background-color: #404040;
        text-align: center;
        font-size: 16px;
        max-width: 125px;
        padding: 0;
        border: 2px solid gray;
        color: white;
    }

    ::placeholder {
        color: white;
    }

    .weather-text {
        color: white;
        font-size: 20px;
    }

    span {
        font-size: 23px;
        margin: 0 2px;
        color: hsl(216, 100%, 87%);
    }
}
</style>