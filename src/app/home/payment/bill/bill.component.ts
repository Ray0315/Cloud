import { IShopping, ISafe } from './../../../interface/IShopping';
import { ShoppingService } from './../../../service/shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: JQueryStatic;
declare let title: any;

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, AfterViewInit {

  billStatus: Boolean = false;
  paymentMethod: String = '';
  data: IShopping;
  totalAmount: number = 0;
  hardwareBill: number = 0;
  osBill: number;
  discount: number;
  bandwidthBill: number = 0;
  quotaBill: number = 0;
  quotaLimitBill: number = 0;
  serverSpecBill: number = 0;
  totalSpace: number = 0;

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
    this.data = shoppingCar;

    if (shoppingCar !== null && shoppingCar.group[0].start !== '') {
      this.billStatus = true;
      // 計算作業系統價格
      this.osBill = shoppingCar.os.cost;

      // 計算預租時間的折扣
      switch (shoppingCar.spec.time.id) {
        case 1:
          this.discount = 1;
          break;
        case 2:
          this.discount = 0.9;
          break;
        case 3:
          this.discount = 0.85;
          break;
        case 4:
          this.discount = 0.8;
          break;
        case 5:
          this.discount = 0.7;
          break;
        default:
          this.discount = 9999;
          break;
      }

      // 計算網路規格
      if (shoppingCar.spec.network.id <= 5) {
        this.bandwidthBill = shoppingCar.spec.network.cost;
      } else if (shoppingCar.spec.network.id > 5 && shoppingCar.spec.network.id < 12) {
        this.quotaLimitBill = shoppingCar.spec.network.cost;
      } else {
        this.quotaBill = shoppingCar.spec.network.cost;
      }

      // 計算虛擬伺服器規格
      switch (shoppingCar.spec.server.id) {
        case 1:
          this.serverSpecBill = 40;
          break;
        case 2:
          this.serverSpecBill = 80;
          break;
        case 3:
          this.serverSpecBill = 160;
          break;
        case 4:
          this.serverSpecBill = 320;
          break;
        case 5:
          this.serverSpecBill = 640;
          break;
        default:
          this.serverSpecBill = 9999;
          break;
      }

      // 計算硬碟空間費用
      for (let personKey of shoppingCar.hdd) {
        this.totalSpace = (+this.totalSpace) + (+personKey.space);
      }

      // 計算虛擬伺服器費用
      let quantity: number = shoppingCar.set.vm;
      let safe: any = 0;
      for (let personKey of shoppingCar.set.safe) {
        if (personKey.status) {
          safe++;
        }
      }

      this.hardwareBill = (this.osBill + this.serverSpecBill + (100 * safe) + (this.totalSpace * 10)) * quantity;

      // 總費用

      this.totalAmount = Math.ceil((this.hardwareBill + this.bandwidthBill + this.quotaLimitBill) * this.discount);
      this.discount = (this.hardwareBill + this.bandwidthBill + this.quotaLimitBill) - this.totalAmount;

      this.paymentMethod = this.service.getPaymentMeyhod();
      switch (this.service.getPaymentMeyhod()) {
        case 'sonet':
          this.paymentMethod = '信用卡';
          break;
        case 'esunbank':
          this.paymentMethod = '玉山虛擬帳戶';
          break;
        default:
          this.paymentMethod = '信用卡';
          break;
      }

    }


  }

  ngAfterViewInit() {
    this.detail();
  }

  bill() {
    let amount: number = this.totalAmount;
    // 89 :Sonet , 90： 玉山銀行
    let pid: number = this.service.getPaymentMeyhod() === 'sonet' ? 89 : 90;

    // 判斷Domain是否為測試機
    if (window.location.hostname === 'qa.cloud.snsplus.com' || window.location.hostname === 'localhost') {
      amount = 1;
    }

    // 測試階段 -- 正式上線後記得拿掉
    amount = 1;

    location.href = `https://pay.tw.gamagic.com/Deposit/default.aspx?paid=cloud&id=77&sid=1&uid=12649305348753&name=12649305348753&amount=${amount}&pid=${pid}`;
  }

  detail() {
    let $menu = $('ul.show li'),
      $title = $menu.children('span.title');

    let iconTxt_plus = ' [+]';
    let iconTxt_minus = ' [-]';

    let nowIndex = 0,
      slideSpeed = 300;

    $menu.each(function () {
      let $subMenu = $(this).children('ul.subMenu').hide();

      if ($subMenu.length !== 0) {

        $title.eq($(this).index()).append(iconTxt_plus);
      }

      $(this).click(function () {

        nowIndex = $(this).index();


        $(this).siblings().find('ul').slideUp(slideSpeed);
        if (!$subMenu.is(':visible')) {
          $subMenu.slideDown(slideSpeed);
        } else {
          $subMenu.slideUp(slideSpeed);
        }

        // 變更 伸縮時 + - 的符號
        $title.each(function (i) {
          if (i !== nowIndex) {
            $(this).html($(this).html().replace(iconTxt_minus, iconTxt_plus));
          } else {
            let str = $(this).html();
            if (str.indexOf(iconTxt_minus) !== -1) {
              str = str.replace(iconTxt_minus, iconTxt_plus);
            } else if (str.indexOf(iconTxt_plus) !== -1) {
              str = str.replace(iconTxt_plus, iconTxt_minus);
            }
            $(this).html(str);
          }
        });

      });
    });

  }

}
