import { LightningElement,api,wire } from 'lwc';
import getContactStatus from '@salesforce/apex/ContactStatusController.getContactStatus';

export default class ContactStatusTab extends LightningElement {
    @api recordId; 

    @wire(getContactStatus, { contactId: '$recordId' })
    
    wiredContactStatus({ data, error }) {
        if (data) {
            this.contactStatus = data;
            console.log('this.contactStatus'+ this.contactStatus);
        } else if (error) {
            this.contactStatus = 'Error fetching contact status';
        }
    }
}