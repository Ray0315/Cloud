import { ShoppingService } from './../../../service/shopping.service';
import { Router } from '@angular/router';
import { IHdd, IShopping } from './../../../interface/IShopping';
import { Component, OnInit } from '@angular/core';

class ContactInfo {
  constructor(
    public name: string,
    public space: number,
    public device: string
  ) { }
}

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  data: IHdd[];
  checkData: Boolean = true;
  device: number = 98;

  constructor(private router: Router, private service: ShoppingService) { }

  ngOnInit() {

    // 初始化

    // 去serveice取得資訊
    let shoppingCar: IShopping = this.service.getShoppingCar();
    // 如果是Null就取localStorage的資訊
    if (shoppingCar == null) {
      shoppingCar = JSON.parse(window.localStorage.getItem('ShoppingCar'));
      this.service.setShoppingCar(shoppingCar);
      console.log(shoppingCar);
    }

    this.data = shoppingCar.hdd;

  }

  // 新增硬碟空間
  addInfo() {
    // 檢查資料正確性
    this.CheckDataInfo();

    if (this.checkData) {
      this.data.push(new ContactInfo('', 0, `/dev/vd${String.fromCharCode(++this.device)}`));
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
    // this.CheckDataInfo();

    if (this.checkData) {
      // 設定新增硬碟空間到service
      this.service.setHdd(this.data);
      // 儲存到 localStorage
      window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));

      this.router.navigate(['/s05']);
    } else {
      alert('資料格式錯誤');
    }
  }

  // 檢查資料有沒有完整填寫完畢
  CheckDataInfo() {
    //console.log(this.data);
    for (let person of this.data) {
      // console.log(`${person.name} : ${person.space}`);
      if (person.name === '' || person.space === 0 || isNaN(Number(person.space))) {
        this.checkData = false;
      } else {
        this.checkData = true;
      }
    }
  }

}
