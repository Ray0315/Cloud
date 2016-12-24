import { Router } from '@angular/router';
import { IShopping, ISpec, IInfomation, INetwork, IServer, ITime } from './../../../interface/IShopping';
import { ShoppingService } from './../../../service/shopping.service';
import { Component, OnInit } from '@angular/core';
declare let $: JQueryStatic;

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  select: ISpec;
  time: ITime;
  network: INetwork;
  server: IServer;

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

    this.select = shoppingCar.spec;

    this.time = shoppingCar.spec.time;
    this.network = shoppingCar.spec.network;
    this.server = shoppingCar.spec.server;



    switch (this.time.id) {
      case 1:
        $('#month_01').attr('checked', 'checked');
        break;
      case 2:
        $('#month_02').attr('checked', 'checked');
        break;
      case 3:
        $('#month_03').attr('checked', 'checked');
        break;
      case 4:
        $('#month_04').attr('checked', 'checked');
        break;
      case 5:
        $('#month_05').attr('checked', 'checked');
        break;
      default:
        break;
    }

    switch (this.network.id) {
      case 1:
        $('#web_01').attr('checked', 'checked');
        break;
      case 2:
        $('#web_02').attr('checked', 'checked');
        break;
      case 3:
        $('#web_03').attr('checked', 'checked');
        break;
      case 4:
        $('#web_04').attr('checked', 'checked');
        break;
      case 5:
        $('#web_05').attr('checked', 'checked');
        break;
      case 6:
        $('#web_06').attr('checked', 'checked');
        break;
      case 7:
        $('#web_07').attr('checked', 'checked');
        break;
      case 8:
        $('#web_08').attr('checked', 'checked');
        break;
      case 9:
        $('#web_09').attr('checked', 'checked');
        break;
      case 10:
        $('#web_10').attr('checked', 'checked');
        break;
      case 11:
        $('#web_11').attr('checked', 'checked');
        break;
      case 12:
        $('#web_12').attr('checked', 'checked');
        break;
      default:
        break;
    }

    switch (this.server.id) {
      case 1:
        $('#web_13').attr('checked', 'checked');
        $('#web_13').parent().addClass('on');
        break;
      case 2:
        $('#web_14').attr('checked', 'checked');
        $('#web_14').parent().addClass('on');
        break;
      case 3:
        $('#web_15').attr('checked', 'checked');
        $('#web_15').parent().addClass('on');
        break;
      case 4:
        $('#web_16').attr('checked', 'checked');
        $('#web_16').parent().addClass('on');
        break;
      case 5:
        $('#web_17').attr('checked', 'checked');
        $('#web_17').parent().addClass('on');
        break;
      default:
        break;
    }


    // 使用者在選虛擬伺服器規格後會有選後樣式 ----------------------
    let $radio = $('input[name=s02_C]');

    $radio.each(function () {
      $(this).click(function () {
        let $list = $(this).parent();
        $list.addClass('on').siblings().removeClass('on');
      });
    });
  }

  // 選擇預租時間
  UserSelectTime(id, day, unit) {
    this.select.time.id = id;
    this.select.time.day = day;
    this.select.time.unit = unit;
    // 設定硬體規格到service
    this.service.setSpec(this.select);
    // 儲存到 localStorage
    window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));

    console.log(this.service.getShoppingCar());
  }
  // 選擇網路規格
  UserSelectNetwork(id, flow, unit, cost) {
    this.select.network.id = id;
    this.select.network.flow = flow;
    this.select.network.unit = unit;
    this.select.network.cost = cost;
    // 設定硬體規格到service
    this.service.setSpec(this.select);
    // 儲存到 localStorage
    window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));
  }

  // 虛擬伺服器規格
  UserSelectServer(id, name, cost) {
    this.select.server.id = id;
    this.select.server.name = name;
    this.select.server.cost = cost;
    // 設定硬體規格到service
    this.service.setSpec(this.select);
    // 儲存到 localStorage
    window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));
  }

  Check() {
    if (this.select.time.id === 0) {
      alert('請選擇預租時間');
    } else if (this.select.network.id === 0) {
      alert('請選擇網路規格');
    } else if (this.select.server.id === 0) {
      alert('請選擇虛擬伺服器規格');
    } else {
      this.router.navigate(['/s03']);
    }
  }

}
