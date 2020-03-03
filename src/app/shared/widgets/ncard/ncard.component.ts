import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
//import { setTimeout } from 'timers';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-ncard',
  templateUrl: './ncard.component.html',
  styleUrls: ['./ncard.component.scss']
})
export class NcardComponent implements OnInit {

  
  chartOptions : {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    
    this.chartOptions=
    {

      chart: {
          type: 'column'
      },
  
      title: {
          text: 'Random Fruits Data'
      },
  
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', ]
      },
  
      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Number of fruits'
          }
      },
      export : {
        enabled : true
      },
      credits : {
        enabled : false
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.x + '</b><br/>' +
                  this.series.name + ': ' + this.y + '<br/>' +
                  'Total: ' + this.point.stackTotal;
          }
      },
  
      plotOptions: {
          column: {
              stacking: 'normal'
          }
      },
  
      series: [{
          name: 'John',
          data: [5, 3, 4],
          stack: 'male'
      }, {
          name: 'Joe',
          data: [4, 2, 5],
          stack: 'male'
      }, {
          name: 'Jane',
          data: [2, 5, 6],
          stack: 'female'
      }, {
          name: 'Janet',
          data: [3, 0, 4],
          stack: 'female'
      }]
  };
    
      HC_exporting(Highcharts);
      
      // setTimeout(()=>{
      //   window.dispatchEvent(
      //     new Event('resize')
      //   );
      // },300);
  
  }

}
