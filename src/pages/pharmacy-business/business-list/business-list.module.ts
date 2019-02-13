import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular'
import { ComponentsModule } from "../../../components/components.module";
import { businessList } from "./business-list";

@NgModule({
  declarations: [
    businessList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(businessList)
  ],
  exports: [
    businessList
  ]
})

export class businessListModule {
}