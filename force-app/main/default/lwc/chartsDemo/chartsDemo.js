import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities'
export default class ChartsDemo extends LightningElement {
    pieChartLabels = []
    pieChartData = []

    @wire(getOpportunities)
    opportunityHandler({data, error}){
        if(data){
            console.log(data);
            const result = data.reduce((json, val) => ({...json, [val.StageName]: (json[val.StageName]||0) + 1}), {})
            console.log("Result: ", result);
            
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                console.log("1",this.pieChartLabels.length);
                
                this.pieChartData = Object.values(result)
                console.log("2", this.pieChartData.length);
            }
        }
        if(error){
            console.error(error)
        }
    }
}