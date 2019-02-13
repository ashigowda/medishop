import { ServiceProvider } from 'mediserve-services';
import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { BusinessBase } from '../../base';

@IonicPage()

@Component({
    selector: 'page-ebusiness-verify-step1-aadhar',
    templateUrl: 'ebusiness-verify-step1-aadhar.html'
})

export class ebusinessVerifyStep1Aadhar extends BusinessBase {

    number: string = "number";

    pinRepeat: string = "";
    tPin: string = "";

    pinConfirmed: boolean = false;

    error: boolean;
    matrix = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public svcsCtrl: ServiceProvider
    ) {
        super(navCtrl, navParams, svcsCtrl);
        this.title = "Aadhar Verification";
    }
    clicked(event) {

        if (event.srcElement.id == 'iback' || event.srcElement.id == "back") {
            this.tPin = this.tPin.slice(0, -1);
        }
        else {

            this.tPin += event.srcElement.id;
        }
    }

    confirmPin() {
        this.navCtrl.push('ebusinessVerifyStep2Otp')
    }

}