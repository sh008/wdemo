import { Component, OnInit } from '@angular/core';
import { single } from '../data';
declare const $: any;
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  single: any[];
  view: any[] = [700, 300];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor() {
    Object.assign(this, { single });

  }
  ngOnInit(): void {
    this.setWidth();
  }
  onSelect(event) {
    console.log(event);
  }
  onResize(event) {
    this.setWidth();
  }
  setWidth() {
    let width = $("#number").width() < 400 ? 400 : $("#number").width()
    this.view = [width, 300];
  }

}
