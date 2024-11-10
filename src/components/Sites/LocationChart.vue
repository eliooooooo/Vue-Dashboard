<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import ContainerSimple from './../ContainerSimple.vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartOptions = { responsive: true };
const chartData = {
    labels: ['France', 'Allemagne', 'Italie', 'Others'],
    datasets: [{
        data: [40, 20, 12, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
};

</script>

<template>
    <ContainerSimple title="Location" desc="The location from where the users vitis your site" >
        <Doughnut :options="chartOptions" :data="chartData"/>
    </ContainerSimple>
</template>