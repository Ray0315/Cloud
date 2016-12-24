import { ShoppingService } from './../../../service/shopping.service';
import { Router } from '@angular/router';
import { IGroup, IShopping } from './../../../interface/IShopping';
import { Component, OnInit } from '@angular/core';

class ContactInfo {
  constructor(
    public type: string,
    public start: string,
    public end: string,
    public ip: string,
    public mask: string
  ) { }
}

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.css']
})
export class StepSixComponent implements OnInit {

  data: IGroup[];
  checkData: Boolean = true;

  protocol: JSON[] = JSON.parse('[{"name":"TCP"},{"name":"UDP"},{"name":"ICMP"}]');

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

    this.data = shoppingCar.group;

  }

  Check() {

    // 檢查資料正確性
    this.CheckDataInfo();

    if (this.checkData) {
      // 設定新增硬碟空間到service
      this.service.setGroup(this.data);
      // 儲存到 localStorage
      window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));
      this.router.navigate(['/s07']);
    } else {
      alert('尚未填寫完畢');
    }
  }

  // 新增硬碟空間
  addInfo() {
    // 檢查資料正確性
    this.CheckDataInfo();

    if (this.checkData) {
      this.data.push(new ContactInfo('TCP', '', '', '', ''));
    } else {
      alert('尚未填寫完畢');
    }

  }

  // 刪除硬碟空間
  deleteInfo(index) {
    this.data.splice(index, 1);
  }

  // 檢查資料有沒有完整填寫完畢
  CheckDataInfo() {
    for (let person of this.data) {
      if (person.start === '' || person.end === '' || person.ip === '' || person.mask === '') {
        this.checkData = false;
        break;
      } else {
        this.checkData = true;
      }
    }
  }

}
