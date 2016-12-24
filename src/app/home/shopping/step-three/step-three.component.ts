import { ShoppingService } from './../../../service/shopping.service';
import { ISet, IShopping, ISafe } from './../../../interface/IShopping';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare let $: JQueryStatic;

@Component({
    selector: 'app-step-three',
    templateUrl: './step-three.component.html',
    styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

    select: ISet;
    vm: number = 1;
    data: any[];
    data2: any[];
    data3: ISafe[];
    subnetwork: string = '192.168.100.0/24';
    selectUser: string = 'admin';

    antivirus: boolean;
    ips: boolean;
    encryption: boolean;
    safe: boolean;

    outnetwork: string = '27.105.202.101';

    list: string[];

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

        this.select = shoppingCar.set;

        // this.list = this.select.safe.split(',');

        this.selectUser = this.select.access === '' ? this.selectUser : this.select.access;
        this.subnetwork = this.select.subnetwork === '' ? this.subnetwork : this.select.subnetwork;


        this.vm = this.select.vm;

        this.data = JSON.parse('[{"ip":"192.168.100.0/24"},{"ip":"192.168.100.0/25"},{"ip":"192.168.100.0/26"}]');

        this.data2 = JSON.parse('[{"user":"admin"},{"user":"80121"},{"user":"80526"}]');

        this.data3 = this.select.safe; // JSON.parse('[{"id":1,"name":"主機防毒", "status": false},{"id":2,"name":"入侵防護", "status": false},{"id":3,"name":"資料加密", "status": false},{"id":4,"name":"資安檢測", "status": false}]');
    }

    Check() {
        if (this.vm == null) {
            alert('虛擬伺服器不得為空');
        } else {
            // 更新ISet資料
            this.select.vm = this.vm;
            this.select.subnetwork = this.subnetwork;
            this.select.access = this.selectUser;
            this.select.outnetwork = this.outnetwork;
            this.select.safe = this.data3;

            // 設定虛擬伺服器到service
            this.service.setSet(this.select);
            // 儲存到 localStorage
            window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));

            this.router.navigate(['/s04']);
        }


    }

    validate(value) {
        value <= 0 ? this.vm = 1 : this.vm = value;
        console.log('vm=' + this.vm);
    }
}
