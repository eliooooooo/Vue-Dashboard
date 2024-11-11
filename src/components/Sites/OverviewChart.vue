<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ContainerSimple from './../ContainerSimple.vue'

// Enregistrement des composants Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Définition des données du graphique
const chartData = ref({
    labels: ['January', 'February', 'March'],
    datasets: [
        {
            label: 'Number of Visits',
            data: [40, 20, 12],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ]
})

const chartOptions = ref({ responsive: true })
</script>

<template>
    <ContainerSimple title="Overview" desc="Here are overview stats for all your websites" :toggle="true">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </ContainerSimple>
</template>