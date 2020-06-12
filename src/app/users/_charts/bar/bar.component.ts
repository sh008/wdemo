import { Component, OnInit } from '@angular/core';
import { single } from '../data';
declare const $: any;
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
    this.setWidth();
  }
  ngOnInit(): void {

  }
  onResize(event) {
    this.setWidth();
  }
  onSelect(event) {
    console.log(event);
  }
  setWidth() {
    let width = $("#bar").width() < 400 ? 400 : $("#bar").width()
    this.view = [width, 300];
  }


}
