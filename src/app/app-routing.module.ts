import { CenterComponent } from './home/member/center/center.component';
import { DetailComponent } from './home/payment/record/detail/detail.component';
import { RecordComponent } from './home/payment/record/record.component';
import { MethodComponent } from './home/payment/method/method.component';
import { BillComponent } from './home/payment/bill/bill.component';
import { PaymentComponent } from './home/payment/payment.component';
import { StepSevenComponent } from './home/shopping/step-seven/step-seven.component';
import { StepSixComponent } from './home/shopping/step-six/step-six.component';
import { StepFiveComponent } from './home/shopping/step-five/step-five.component';
import { StepFourComponent } from './home/shopping/step-four/step-four.component';
import { StepThreeComponent } from './home/shopping/step-three/step-three.component';
import { StepTwoComponent } from './home/shopping/step-two/step-two.component';
import { StepOneComponent } from './home/shopping/step-one/step-one.component';
import { EstablishComponent } from './home/establish/establish.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'establish',
    component: EstablishComponent
  },
  {
    path: 's01',
    component: StepOneComponent
  },
  {
    path: 's02',
    component: StepTwoComponent
  },
  {
    path: 's03',
    component: StepThreeComponent
  },
  {
    path: 's04',
    component: StepFourComponent
  },
  {
    path: 's05',
    component: StepFiveComponent
  },
  {
    path: 's06',
    component: StepSixComponent
  },
  {
    path: 's07',
    component: StepSevenComponent
  },
  {
    path: 'payment', component: PaymentComponent,
    children: [
      { path: '', component: BillComponent },
      { path: 'bill', component: BillComponent },
      { path: 'method', component: MethodComponent },
      { path: 'record', component: RecordComponent },
      { path: 'detail', component: DetailComponent }
    ]
  },
  {
    path: 'member/center',
    component: CenterComponent
  }

  // {
  //   path: 'home', component: HomeComponent,
  //   children: [
  //     { path: '', component: InformationComponent },
  //     { path: 'info', component: InformationComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
