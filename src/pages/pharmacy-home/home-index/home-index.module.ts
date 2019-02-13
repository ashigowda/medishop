import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { pharmacyHomeIndex } from "./home-index";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    pharmacyHomeIndex
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(pharmacyHomeIndex)
  ],
  exports: [
    pharmacyHomeIndex,
  ]
})

export class pharmacyHomeIndexModule {
}