import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue = ''
    handleChange(event){
        this.inputValue = event.target.value;

    }

    handleSubmit(event){
        event.preventDefault();
        const inputComp = this.template.querySelector('lightning-input');
        const value = inputComp.value;
        if(!value.includes('Australia')){
            inputComp.setCustomValidity('Please enter Australia in Account Name');
        }else{
            inputComp.setCustomValidity('');
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputComp.reportValidity();
    }

    successHandler(event){
        const toastEvent = new ShowToastEvent({
            title: 'Acount Created',
            message: 'Record ID: ' + event.detail.id,
            variant: "success"
        });

        this.dispatchEvent(toastEvent);
    }

    handleError(event){
        const toastEvent = new ShowToastEvent({
            title: 'Error creating Account',
            message: event.detail.message,
            variant: "error"
        });

        this.dispatchEvent(toastEvent);
    }
}