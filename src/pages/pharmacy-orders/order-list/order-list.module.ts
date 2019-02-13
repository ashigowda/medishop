import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
 import { orderList } from "./order-list";

@NgModule({
  declarations: [
    orderList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderList)
  ],
  exports: [
    orderList
  ]
})

export class orderListModule {
}