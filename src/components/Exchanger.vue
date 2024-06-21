<script setup>
import { computed, ref, watch } from 'vue';

const moneys = [
    { currency: "USD", rate: 1 },
    { currency: "EUR", rate: 0.85 },
    { currency: "HNL", rate: 40 },
    { currency: "YEN", rate: 158 },
];

const fromCurrency = ref('EUR')
const toCurrency = ref('USD')
const amount = ref(0)
const result = ref(0)

const calculateExchange = () => {
    const value = moneys.find((rate) => rate.currency === fromCurrency.value);
    const value2 = moneys.find((rate) => rate.currency === toCurrency.value);
    let temp = amount.value / value.rate;
    temp = temp * value2.rate;
    temp = temp.toFixed(2)
    result.value = temp;
};

watch([amount, fromCurrency, toCurrency], () => {
    calculateExchange();
});
</script>
<template>
    <div class="exchangeWrapper">
        <input type="text" v-model="amount">
        <select v-model="fromCurrency" name="" id="">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="HNL">HNL</option>
            <option value="YEN">YEN</option>
        </select>
        <input type="text" v-model="result">
        <select v-model="toCurrency" name="" id="">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="HNL">HNL</option>
            <option value="YEN">YEN</option>
        </select>
    </div>
</template>


<style lang="scss" scoped>
.exchangeWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #6b6b6b;
    height: 50px;
    width: 350px;
    padding: 10px;
    gap: 7px;
    border-radius: 7px;
}

input {
    width: 50%;
    padding: 5px;
    color: white;
    background-color: #959595;
    border-radius: 5px;
    font-size: 24px;
}

select {
    padding: 5px;
    background-color: #959595;
    color: white;
    font-size: 20px;
}
</style>