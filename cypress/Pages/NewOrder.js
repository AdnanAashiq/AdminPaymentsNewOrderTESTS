export class Order{
    neworderbutton_locator= 'New Order'
    customeridfield_locator= '#payment_user_id';
    productdropdown_locator = '#payment_feature_product_id';
    quantity_locator = '#payment_quantity';
    totalprice_locator = '#payment_price'
    discount_locator = '#payment_discount';
    totalpayable_locator = '#payable_';
    paymentmethod_locator = '.col-md-8 > #payment_payment_method';
    comments_locator = ':nth-child(2) > .col-md-8 > #payment_comments';
    receiptdate_locator = '#payment_receipt_date';
    id = 'payment_feature_product_id'
    previewbutton_locator = '#show-preview'
    backtoformbutton_locator = '#show-form'
    submitbutton_locator = '#frm_credit_contact > .modal-footer > #submitbutton'


    //Random int number generator between min and max
   

    ClickOnNewOrderButton(){
        cy.contains(this.neworderbutton_locator).click();
    }
    InputCustomerID(ID){
        cy.get(this.customeridfield_locator).type(ID)
    }
    InputProduct(Product){
        cy.get(this.productdropdown_locator).select(Product)
    }
    InputQuantity(Quantity){
        cy.get(this.quantity_locator).select(Quantity);
    }
    InputTotalPrice(Price){
        cy.get(this.totalprice_locator).type(Price);
    }
    InputDiscount(Discount){
        cy.get(this.discount_locator).type(Discount)
    }
    /*InputPayable(Payable){
        cy.get(this.totalpayable_locator).type(Payable)
    }*/
    InputPaymentMethod(PaymentMethod){
        cy.get(this.paymentmethod_locator).select(PaymentMethod);
    }
    InputComment(Comment){
        cy.get(this.comments_locator).type(Comment)
    }
    InputDate(){
        cy.get(this.receiptdate_locator).click();
        cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click();
    }
    ClickonPreview(){
        cy.get(this.previewbutton_locator).click()
    }
    ClickonBack(){
        cy.get(this.backtoformbutton_locator).click()
    }
    clickonSubmit(){
        cy.get(this.submitbutton_locator).click()
    }


}