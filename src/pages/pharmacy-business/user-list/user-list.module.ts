import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { userList } from "./user-list";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    userList
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(userList)
  ],
  exports: [
    userList
  ]
})

export class userListModule {
}