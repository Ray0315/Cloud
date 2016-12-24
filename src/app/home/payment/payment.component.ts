import { Component, OnInit } from '@angular/core';
declare let $: JQueryStatic;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    let screenHeight: number = window.screen.availHeight;
    let header = $('header').outerHeight();
    let footer = $('footer').outerHeight();
    screenHeight = screenHeight - header - footer;
    $('.left').height(screenHeight);
  }

}
