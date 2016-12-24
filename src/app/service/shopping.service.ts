import { ISpec, ISet, IHdd, ISll, IGroup, IOs } from './../interface/IShopping';
import { Injectable, EventEmitter } from '@angular/core';
import { IShopping } from '../interface/IShopping';

let shopping: IShopping;
let paymentMethod: String = 'sonet';
let loginStatus: Boolean = false;

@Injectable()
export class ShoppingService {

    navchange: EventEmitter<boolean> = new EventEmitter();
    constructor() { }
    // 取得資訊
    getShoppingCar(): IShopping {
        return shopping;
    }
    // 初始化
    setShoppingCar(data: IShopping) {
        shopping = data;
    }

    // 設定選擇作業系統
    setOs(os: IOs) {
        shopping.os = os;
    }
    // 設定選擇硬體規格
    setSpec(spec: ISpec) {
        shopping.spec = spec;
    }

    // 設定選擇硬體規格
    setSet(set: ISet) {
        shopping.set = set;
    }

    // 設定新增硬碟空間
    setHdd(hdd: IHdd[]) {
        shopping.hdd = hdd;
    }

    // 設定新增SSH金鑰
    setSll(sll: ISll[]) {
        shopping.sll = sll;
    }

    // 設定新的安全群組
    setGroup(group: IGroup[]) {
        shopping.group = group;
    }

    // -----------------------------------------------------------------------

    // 取得付款金流資訊
    getPaymentMeyhod() {
        return paymentMethod;
    }

    // 設定付款金流
    setPaymentMeyhod(bank: String) {
        paymentMethod = bank;
    }

    // -----------------------------------------------------------------------

    // 取得付款金流資訊
    getLogin() {
        return loginStatus;
    }

    // 設定付款金流
    setLogin(status: Boolean) {
        loginStatus = status;
    }
}
