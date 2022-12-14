import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  @Input() data: any = [];
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Expectativa de crescimento da população por continente',
      },
      subtitle: {
        text: 'Source: Wikipedia.org',
      },
      // xAxis: {
      //   categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      //   tickmarkPlacement: 'on',
      //   title: {
      //     enabled: false,
      //   },
      // },
      // yAxis: {
      //   title: {
      //     text: 'Billions',
      //   },
      //   labels: {
      //     formatter: function () {
      //       return this.value / 1000;
      //     },
      //   },
      // },
      tooltip: {
        split: true,
        valueSuffix: ' millions',
      },
      // plotOptions: {
      //   area: {
      //     stacking: 'normal',
      //     lineColor: '#666666',
      //     lineWidth: 1,
      //     marker: {
      //       lineWidth: 1,
      //       lineColor: '#666666',
      //     },
      //   },
      // },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: this.data,
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 3000);
  }
}
