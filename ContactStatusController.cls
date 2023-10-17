public with sharing class ContactStatusController {
    @AuraEnabled(cacheable=true)
    public static String getContactStatus(Id contactId) {
        Contact contactRecord = [SELECT Status__c FROM Contact WHERE Id = :contactId LIMIT 1];
        if (contactRecord != null) {
            return contactRecord.Status__c;
        }
        return null;
    }
}
