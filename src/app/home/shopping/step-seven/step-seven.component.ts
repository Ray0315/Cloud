import { IShopping, IGroup, IHdd, ISet, ISll, ISpec, IOs } from './../../../interface/IShopping';
import { ShoppingService } from './../../../service/shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-seven',
  templateUrl: './step-seven.component.html',
  styleUrls: ['./step-seven.component.css']
})
export class StepSevenComponent implements OnInit {

  group: IGroup[];
  hdd: IHdd[];
  sll: ISll[];
  os: IOs;
  set: ISet;
  spec: ISpec;

  constructor(private router: Router, private service: ShoppingService) { }

  ngOnInit() {

    // 初始化

    // 去serveice取得資訊
    let shoppingCar: IShopping = this.service.getShoppingCar();
    // 如果是Null就取localStorage的資訊
    if (shoppingCar == null) {
      shoppingCar = JSON.parse(window.localStorage.getItem('ShoppingCar'));
      this.service.setShoppingCar(shoppingCar);
    }

    this.group = shoppingCar.group;
    this.hdd = shoppingCar.hdd;
    this.sll = shoppingCar.sll;
    this.os = shoppingCar.os;
    this.set = shoppingCar.set;
    this.spec = shoppingCar.spec;

  }

}
