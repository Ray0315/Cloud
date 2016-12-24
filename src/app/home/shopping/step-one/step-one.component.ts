import { IShopping, IOs } from './../../../interface/IShopping';
import { ShoppingService } from './../../../service/shopping.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

    select: IOs;
    open: boolean = true;

    constructor(private router: Router, private service: ShoppingService) {

    }

    ngOnInit() {

        // 初始化

        // 去serveice取得資訊
        let shoppingCar: IShopping = this.service.getShoppingCar();
        // 如果是Null就取localStorage的資訊
        if (shoppingCar == null) {
            shoppingCar = JSON.parse(window.localStorage.getItem('ShoppingCar'));
            this.service.setShoppingCar(shoppingCar);
        }

        let os: IOs = shoppingCar.os;
        this.select = os;

        switch (os.id) {
            case 1:
                $('.redHat').addClass('on');
                $('.redHat').children('a.btn').addClass('on');
                break;
            case 2:
                $('.centos').addClass('on');
                $('.centos').children('a.btn').addClass('on');
                break;
            case 3:
                $('.ubuntu').addClass('on');
                $('.ubuntu').children('a.btn').addClass('on');
                break;
            case 4:
                $('.windows').addClass('on');
                $('.windows').children('a.btn').addClass('on');
                break;
            default:
                break;
        }


        // 讓使用者看到點擊後可以看到li有淡藍色背景
        let $list = $('ul.s01_list li');

        $list.click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            $(this).siblings().children('a.btn').removeClass('on');
            $(this).children('a.btn').addClass('on');
        });
    }

    UserSelect(id, name, cost) {
        this.select.id = id;
        this.select.name = name;
        this.select.cost = cost;
        // 設定作業系統到service
        this.service.setOs(this.select);
        // 儲存到 localStorage
        window.localStorage.setItem('ShoppingCar', JSON.stringify(this.service.getShoppingCar()));
    }

    Check() {
        this.router.navigate(['/s02']);
        // if (this.select.id !== 0) {
        //     this.router.navigate(['/s02']);
        //     // this.router.navigate(['/s02', { foo: 'foo' }]);
        // } else {
        //     alert('請選擇作業系統');
        // }
    }

}
