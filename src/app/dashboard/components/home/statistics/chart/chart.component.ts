import { Component, Input, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() labels: string[];
  @Input() data: any;
  canvas: any;
  ctx: any;
  max = 150;
  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.labels, // responsible for how many bars are gonna show on the chart
        // create 4 datasets, since we have 4 items
        // data[0] = labels[0] (data for first bar - 'Mar') | data[1] = labels[1] (data for second bar - 'Feb') | and so on...
        // put 0, if there is no data for the particular bar
        datasets: [
          {
            label: 'Applications',
            data: this.data.applications,
            backgroundColor: '#73CBFF',
            maxBarThickness: 13,
            order: 4
          },
          {
            label: 'Shortlisted',
            data: this.data.shortlisted,
            backgroundColor: '#98CD8D',
            maxBarThickness: 13,
            order: 3
          },
          {
            label: 'On Hold',
            data: this.data.onHold,
            backgroundColor: '#FDBD5F',
            maxBarThickness: 13,
            order: 2
          },
          {
            label: 'Rejected',
            data: this.data.rejected,
            backgroundColor: '#F0664E',
            maxBarThickness: 13,
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            stacked: true, // set to make the bars stacked
            scaleLabel: {
              fontColor: '#333333',
              fontFamily: 'Muli, Helvetica, sans-serif',
              fontSize: 11
            },
            gridLines: {
              display: false
            },
            ticks: {
              fontSize: 11,
              fontColor: '#333333',
              fontFamily: 'Muli, Helvetica, sans-serif',
            }
          }],
          yAxes: [{
            stacked: true, // set to make the bars stacked
            scaleLabel: {
              fontColor: '#333333',
              fontFamily: 'Muli, Helvetica, sans-serif',
              fontSize: 11
            },
            gridLines: {
              color: '#33353944',
              borderDash: [3, 20],
              borderDashOffset: 4,
              lineWidth: 2,
              drawBorder: false,
            },
            ticks: {
              fontSize: 11,
              fontColor: '#333333',
              fontFamily: 'Muli, Helvetica, sans-serif',
              minRotation: 90,
              padding: 10,
              stepSize: 100,
              callback(value: number): string {
                return (value < 0 ? '' : '+') + (value / 10).toFixed(0) + '% '; // convert it to percentage
              },
            }
          }]
        },
      }
    });
  }
}
