<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
    name: 'LocationChart',
    components: { Doughnut },
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
    },
    mounted() {
        console.log('Chart Data:', this.chartData)
        console.log('Chart Options:', this.chartOptions)
    }
}
</script>

<template>
        <div class="border border-dark p-4 rounded-md flex flex-col" x-data="{ openStats: true }">
        <div class="flex flex-row justify-between items-center">
            <div>
                <h1>Location</h1>
                <p>The location from where the users vitis your site</p>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-cloak transition></div>
        <div x-cloak transition>
            <div>
                <Doughnut :options="chartOptions" :data="chartData"/>
            </div>
            <!-- <p class="mt-3">
                No stats to display
            </p> -->
        </div>
    </div>
</template>