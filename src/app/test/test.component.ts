import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { api } from '@leapdev/leap-host';
import { promise } from 'protractor';
import { trigger, state, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ filter: "blur(8px)", opacity: 0, "margin-left": "30px" }),
            animate('.3s ease-out',
              style({ filter: "blur(0px)", opacity: 1,"margin-left": "0px" }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ filter: "blur(0px)", opacity: 1,"margin-left": "0px" }),
            animate('.2s ease-out',
              style({ filter: "blur(8px)", opacity: 0,"margin-left": "30px" }))
          ]
        )
      ]
    )
  ]
})
export class TestComponent implements OnInit, AfterViewInit {
  step = 1;
  isSubmit;
  constructor() { }
  ngAfterViewInit(): void {

  }

  async ngOnInit(): Promise<void> {

  }
  changeStep(step = 1) {
    this.step = null;
    setTimeout(() => {
      this.step = step;
    }, 200);
  }

}
