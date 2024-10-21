import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfoDemo extends LightningElement {

    defaultRecordTypeId;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({data, error}){
        if(data){
            // console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
        }
        if(error){
            console.log(error);
        }
    }

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectData


    objectApiName = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

    objectInfos
    @wire(getObjectInfos, {objectApiNames: '$objectApiName'})
    objectInfosHandler({data, error}){
        if(data){
            console.log(data);
            this.objectInfos = data
        }
        if(error){
            console.log(error);
        }
    }
}