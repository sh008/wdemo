import { Component, OnInit } from '@angular/core';
import { single } from '../data';
declare const $: any;
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  single: any[];
  view: any[] = [700, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  ngOnInit(): void {
    
  }
  constructor() {
    Object.assign(this, { single });
    this.setWidth();
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onResize(event) {
    this.setWidth();
  }
  setWidth() {
    let width = $("#pie").width() < 400 ? 400 : $("#pie").width()
    this.view = [width, 300];
  }
}
