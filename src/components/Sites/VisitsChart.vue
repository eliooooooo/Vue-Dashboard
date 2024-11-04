<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
    name: 'VisitsChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: ['01/11/2023', '01/12/2023', '01/01/2024', '01/02/2024', '01/03/2024', '01/04/2024', '01/05/2024', '01/06/2024', '01/07/2024', '01/08/2024', '01/09/2024', '01/10/2024'],
                datasets: [{
                    label: 'Visits',
                    data: [7600, 8200, 6100, 6500, 6800, 7600, 7400, 7500, 8000, 8300, 8500, 8400],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
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
                <h1>Visits</h1>
                <p>Your website overall visits tracker</p>
            </div>
        </div>
        <div class="w-full border-dark border-b pt-2" x-cloak transition></div>
        <div x-cloak transition>
            <div>
                <Line :options="chartOptions" :data="chartData"/>
            </div>
            <!-- <p class="mt-3">
                No stats to display
            </p> -->
        </div>
    </div>
</template>