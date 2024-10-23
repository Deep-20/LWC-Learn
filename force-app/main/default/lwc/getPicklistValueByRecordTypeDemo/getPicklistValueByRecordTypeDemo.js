import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValueByRecordTypeDemo extends LightningElement {
    selectedRating = ''
    ratingOptions = []

    selectedIndustry = ''
    industryOptions = []

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo;

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}){
        if(data){
            console.log(data);
            this.ratingOptions = [...this.picklistGenerator(data.picklistFieldValues.Rating)]
            this.industryOptions = [...this.picklistGenerator(data.picklistFieldValues.Industry)]
        }
        if(error){
            console.log(error);
            
        }
    }

    picklistGenerator(data){
        return data.values.map(item => ({"label": item.label, "value": item.value }))
    }

    handleChange(event){
        const {name, value} = event.target;

        if(name === 'Industry'){
            this.selectedIndustry = value;
        }
        if(name === 'Rating'){
            this.selectedRating = value;
        }
    }
}