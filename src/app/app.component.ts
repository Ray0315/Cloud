import { Router } from '@angular/router';
import { ShoppingService } from './service/shopping.service';
import { HeroService, Hero } from './service/hero.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { IShopping } from './interface/IShopping';

declare let $: JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  heroes: Hero[];

  loginAccount: string = 'leon.chen';
  loginPw: string = 'snsplus';


  constructor(private router: Router, private service: ShoppingService) { }

  ngOnInit() {

    // this.service.getHeroes()
    //   .then(heroes => {
    //     this.heroes = heroes;
    //     console.log(this.heroes);

    //     this.heroes.push({ id: 1, name: 'aaaaa' });
    //     this.heroes.push({ id: 2, name: 'bbbbb' });
    //     this.heroes.push({ id: 3, name: 'ccccc' });

    //     for (let person of this.heroes) {
    //       console.log(person);    //// 輸出 John, David, Mary
    //     }
    //   });
    // console.log('-------');
    // console.log(this.service.getHero('16').then(x => {
    //   console.log(x.id);
    //   console.log(x.name);
    // }));
    // console.log('-------')

    // console.log('now: ' + this.service.getTemp());
    // this.service.setTemp(true);
    // console.log('change: ' + this.service.getTemp());



    let fadeSpeed = 500;

    $('.jump_close').click(function () {
      $('.mask').fadeOut(fadeSpeed);
      $('.jump').fadeOut(fadeSpeed);
      // $('.mask').hide(500);
      // $('.jump').hide(500);	
    });
    $('#register_btn').click(function () {
      $('.mask').fadeIn(fadeSpeed);
      $('#register').fadeIn(fadeSpeed);

      // $('.mask').show(500);
      // $('#register').show(500);
    });
    $('#login_btn').click(function () {
      $('.mask').fadeIn(fadeSpeed);
      $('#login').fadeIn(fadeSpeed);
    });

    $('.mask').click(function () {
      $('.mask').fadeOut(fadeSpeed);
      $('.jump').fadeOut(fadeSpeed);
    });
  }

  Login() {
    if (this.loginAccount === 'leon.chen' && this.loginPw === 'snsplus') {
      this.service.setLogin(true);
      $('.mask').hide();
      $('.jump').hide();
    } else {
      alert('帳號或密碼有誤！！');
    }
  }

  logout() {
    this.service.setLogin(false);
    this.router.navigate(['/']);
  }

  registered() {
    $('.mask').hide();
    $('.jump').hide();
  }

}
