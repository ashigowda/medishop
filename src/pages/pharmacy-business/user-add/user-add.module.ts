import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { userAdd } from "./user-add";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    userAdd
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(userAdd)
  ],
  exports: [
    userAdd
  ]
})

export class userAddModule {
}