import { ShoppingService } from './../../../service/shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {

  method: String = '';

  constructor(private router: Router, private service: ShoppingService) { }

  ngOnInit() {
    this.method = this.service.getPaymentMeyhod();
  }

  savePaymentMethod() {
    this.service.setPaymentMeyhod(this.method);
    this.router.navigate(['/payment/bill']);
  }

}
