import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    closeModal(){
        const customEvent = new CustomEvent('close');
        this.dispatchEvent(customEvent);
    }
}