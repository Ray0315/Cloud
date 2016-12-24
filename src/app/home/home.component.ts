import { ShoppingService } from './../service/shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jsonString: string = '';

  constructor(private router: Router, private service: ShoppingService) { }

  ngOnInit() {
    // let obj = JSON.parse('{"os":"1","spec":{"time":1,"network":2,"server":3}}');
    // console.log(obj.os);
    // console.log(obj.spec.server);
    // obj.spec.server = '12399';
    // console.log(obj.spec.server);
  }

  createCloud() {
    if (this.service.getLogin()) {
      this.router.navigate(['/establish']);
    } else {
      $('.mask').show();
      $('#login').show();
    }
  }

}
