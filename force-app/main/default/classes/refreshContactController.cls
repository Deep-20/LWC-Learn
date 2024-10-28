public with sharing class refreshContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 10];
    }

    @AuraEnabled
    public static void refreshContacts(){
        List<Contact> contactToUpdate = new List<Contact>();
        List<Contact> contactList = getContactList();
    }
}