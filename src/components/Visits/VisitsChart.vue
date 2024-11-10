<script setup>
import { ref, watch, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import ContainerSimple from './../ContainerSimple.vue'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

// Déclaration des variables réactives
const selectedPeriod = ref('monthly')
const chartData = ref({
    labels: [],
    datasets: [{
            label: 'Visits',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
})
const chartOptions = ref({ responsive: true })

// Fonction pour mettre à jour les données du graphique
const updateChartData = () => {
    if (selectedPeriod.value === 'weekly') {
        chartData.value = {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Visits',
                    data: [1500, 2000, 1800, 2200],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        }
    } else if (selectedPeriod.value === 'monthly') {
        chartData.value = {
            labels: [ '01/11/2023','01/12/2023','01/01/2024','01/02/2024','01/03/2024','01/04/2024','01/05/2024','01/06/2024','01/07/2024','01/08/2024','01/09/2024','01/10/2024'],
            datasets: [{
                label: 'Visits',
                data: [7600,8200,6100,6500,6800,7600,7400,7500,8000,8300,8500,8400],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    } else if (selectedPeriod.value === "yearly") {
        chartData.value = {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Visits',
                data: [30000, 35000, 40000, 45000, 50000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    }
}

const listener = (data) => {
    selectedPeriod.value = data
    updateChartData()
}

onMounted(() => {
    updateChartData()
})
</script>

<template>
    <ContainerSimple title="Visits" desc="Your website overall visits tracker" :period="true" @updateChartData="listener">
        <Line :data="chartData" :options="chartOptions" />
    </ContainerSimple>
</template>