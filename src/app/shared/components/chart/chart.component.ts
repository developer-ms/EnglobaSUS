import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  @ViewChild("doughnutCanvas", {static: true}) doughnutCanvas: ElementRef;

  private doughnutChart: Chart;

  constructor() { }

  ngOnInit() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Mortes", "Confirmados", "Recuperados"],
        datasets: [
          {
            label: "COVID-19 No Brasil",
            data: [11519, 168000, 69232],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)"
            ],
            hoverBackgroundColor: ["#FF6384", "#FFCE56", "#FF6384"]
          }
        ]
      }
    });
  }
}

