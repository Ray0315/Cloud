import { IShopping, ISll } from './../../../interface/IShopping';
import { ShoppingService } from './../../../service/shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

class ContactInfo {
  constructor(
    public key: string,
    public value: string
  ) { }
}

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css']
})
export class StepFiveComponent implements OnInit {
  data: ISll[];
  checkData: Boolean = true;

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

    this.data = shoppingCar.sll;


  }

  // 新增硬碟空間
  addInfo() {
    // 檢查資料正確性
    this.CheckDataInfo();

    if (this.checkData) {
      this.data.push(new ContactInfo('', ''));
    } else {
      alert('尚未填寫完畢');
    }

  }

  // 刪除硬碟空間
  deleteInfo(index) {
    this.data.splice(index, 1);
  }


  Check() {

    // 檢查資料正確性
    this.CheckDataInfo();

    if (this.checkData) {
      // 設定新增硬碟空間到service
      this.service.setSll(this.data);
      // 儲存到 localStorage
      window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));
      this.router.navigate(['/s06']);
    } else {
      alert('尚未填寫完畢');
    }
  }

  // 檢查資料有沒有完整填寫完畢
  CheckDataInfo() {
    for (let person of this.data) {
      if (person.key === '' || person.value === '') {
        this.checkData = false;
        break;
      } else {
        this.checkData = true;
      }
    }
  }

}
