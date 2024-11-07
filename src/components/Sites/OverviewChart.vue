<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import ContainerSimple from './../ContainerSimple.vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar, ContainerSimple },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March'],
                datasets: [{ data: [40, 20, 12] }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>

<template>
    <ContainerSimple title="Overview" desc="Here are overview stats for all your websites" :toggle="true">
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </ContainerSimple>
</template>
