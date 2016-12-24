import { Router } from '@angular/router';
import { ShoppingService } from './../../service/shopping.service';
import { IShopping } from './../../interface/IShopping';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establish',
  templateUrl: './establish.component.html',
  styleUrls: ['./establish.component.css']
})
export class EstablishComponent implements OnInit {

  constructor(private router: Router, private service: ShoppingService) { }

  ngOnInit() {
    this.service.setShoppingCar(null);
    // 清除local Storage 的資料
    localStorage.removeItem('ShoppingCar');
  }

  start() {
    let newObj: IShopping = null;

    // 先抓Local Storage的資料 
    let shoppingCar = window.localStorage.getItem('ShoppingCar');

    if (shoppingCar === null) {
      // 建立全新的 購物清單
      newObj = JSON.parse('{"os":{"id": 2,"name":"CentOS 7","cost" : 0},"spec":{"time":{"id":1,"day":1,"unit":"月"},"network":{"id":1,"flow":"2","unit":"MB","cost" : 20},"server":{"id":1,"name":"M1.tiny","cost" : 40}},"set":{"vm":1,"subnetwork":"","access":"","outnetwork":"","safe":[{"id":1,"name":"主機防毒", "status": false},{"id":2,"name":"入侵防護", "status": false},{"id":3,"name":"資料加密", "status": false},{"id":4,"name":"資安檢測", "status": false}]},"hdd":[{"name":"","space": "","device":"/dev/vdb"}],"sll":[{"key":"","value":""}],"group":[{"type":"TCP","start":"","end":"","ip":"","mask":""}]}');
      // 儲存到 localStorage
      window.localStorage.setItem('ShoppingCar', JSON.stringify(newObj));
      // 儲存到 Shopping Service
      this.service.setShoppingCar(newObj);
    } else {
      newObj = JSON.parse(window.localStorage.getItem('ShoppingCar'));
    }
  }

}
