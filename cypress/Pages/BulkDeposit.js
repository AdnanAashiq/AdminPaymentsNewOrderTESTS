export class BulkDeposit{
    bulkdepositbutton_locator = 'Bulk Deposit';
    bulkdepositmenuclose_locator ='#bulk_deposit_modal > .modal-dialog > .modal-content > .modal-header > .close'
    ClickOnBulkDepositButton(){
        cy.contains(this.bulkdepositbutton_locator).click();
    }
    CloseBulkDeposit(){
        cy.get(this.bulkdepositmenuclose_locator).click();
    }
}