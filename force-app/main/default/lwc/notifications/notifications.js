import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement {

    toastHandler(){
        this.showToast("Success!", "{0} Account Created! {1}", "success")
    }

    toastHandlerTwo(){
        this.showToast("Error!!", "Account Creation Failed!!", "error");
    }

    toastHandlerThree(){
        this.showToast("Warning!", "Password Should have 15 characters!", "warning");
    }

    toastHandlerFour(){
        this.showToast("Info!", "Latest Release is now available!!", "info");
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                'Salesforce', {
                    url: 'https://www.salesforce.com',
                    label:'Click Here'
                }
            ],
            mode:'sticky'
        })

        this.dispatchEvent(event)
    }
}