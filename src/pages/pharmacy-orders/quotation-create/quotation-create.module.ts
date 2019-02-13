import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { quotationCreate } from "./quotation-create";

@NgModule({
  declarations: [
    quotationCreate
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(quotationCreate)
  ],
  exports: [
    quotationCreate
  ]
})

export class quotationCreateModule {
}