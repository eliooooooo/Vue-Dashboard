<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import ContainerSimple from './../ContainerSimple.vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
    name: 'LocationChart',
    components: { Doughnut, ContainerSimple },
    data() {
        return {
            chartData: {
                labels: ['France', 'Allemagne', 'Italie', 'Others'],
                datasets: [{
                    data: [40, 20, 12, 2],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>

<template>
    <ContainerSimple title="Location" desc="The location from where the users vitis your site" >
        <div>
            <Doughnut :options="chartOptions" :data="chartData"/>
        </div>
    </ContainerSimple>
</template>