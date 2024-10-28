import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
export default class RefreshDemoLwc extends LightningElement {
    
    @wire(getContactList)
    contact;
}