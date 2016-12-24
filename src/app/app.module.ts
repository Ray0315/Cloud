import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstablishComponent } from './home/establish/establish.component';

import { ShoppingService } from './service/shopping.service';
import { HeroService } from './service/hero.service';
import { StepOneComponent } from './home/shopping/step-one/step-one.component';
import { StepTwoComponent } from './home/shopping/step-two/step-two.component';
import { StepThreeComponent } from './home/shopping/step-three/step-three.component';
import { StepFourComponent } from './home/shopping/step-four/step-four.component';
import { StepFiveComponent } from './home/shopping/step-five/step-five.component';
import { StepSixComponent } from './home/shopping/step-six/step-six.component';
import { StepSevenComponent } from './home/shopping/step-seven/step-seven.component';
import { PaymentComponent } from './home/payment/payment.component';
import { BillComponent } from './home/payment/bill/bill.component';
import { MethodComponent } from './home/payment/method/method.component';
import { RecordComponent } from './home/payment/record/record.component';
import { DetailComponent } from './home/payment/record/detail/detail.component';
import { CenterComponent } from './home/member/center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstablishComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    StepSevenComponent,
    PaymentComponent,
    BillComponent,
    MethodComponent,
    RecordComponent,
    DetailComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
