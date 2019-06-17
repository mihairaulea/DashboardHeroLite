<script>
import Chart from 'chart.js';
import { onMount } from 'svelte';

onMount(() => {
  console.log("component mounted");
  drawCharts();
});

function drawCharts() {
console.log("draw charts");
var ctx = document.getElementById('myChart');
console.log(ctx);
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

</script>
<div class="row gap-20 masonry pos-r">
    <div class="row">

      <div class='col-sm-6'>
        <div class="layers bd bgc-white p-20">
            Chart one
            <canvas id="myChart"></canvas>
        </div>
      </div>

    </div>


</div>
