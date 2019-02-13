import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { orderHistoryFilterModal } from "./order-history-filter-modal";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    orderHistoryFilterModal
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(orderHistoryFilterModal)
  ],
  exports: [
    orderHistoryFilterModal
  ]
})

export class orderHistoryFilterModalModule {
}