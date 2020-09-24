import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, PositionType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [],
})
export class GraficoDonaComponent implements OnInit {
  @Input() charPosition: PositionType = 'right';

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: this.charPosition,
    },
  };

  @Input() pieChartLabels: Label[] = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];

  @Input() pieChartData: number[] = [300, 500, 100];
  @Input() pieChartType: ChartType = 'pie';
  @Input() pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
