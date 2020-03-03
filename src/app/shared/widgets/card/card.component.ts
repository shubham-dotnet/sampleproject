import { Component, OnInit , Input} from '@angular/core';
import * as Highcharts from 'highcharts';
//import { setTimeout } from 'timers';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  chartOptions : {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    
    this.chartOptions=
      {
        chart: {
            type: 'area',
            backgroundColor : null,
            borderWidth : 0,
            margin : [2,2,2,2],
            height : 70
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },
        tooltip: {
            split: true,
            outside : true
        },
        legend : {
          enabled : false
        },
        credits : {
          enabled : false
        },
        exporting : {
          enabled : false,
        },
        xAxis : {
          labels : {
            enabled : false
          },
          title : {
            text:null
          },
          startOnTick : false,
          endOnTick : false,
          tickOptions : []
        },
        yAxis : {
          labels : {
            enabled : false
          },
          title : {
            text:null
          },
          startOnTick : false,
          endOnTick : false,
          tickOptions : []
        }
        ,
        series: [{
            data: [50,44,68,13,56,32,19,15]
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
