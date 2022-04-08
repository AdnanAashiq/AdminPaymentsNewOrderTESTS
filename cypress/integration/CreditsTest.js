/// <reference types="Cypress" />
import {loginpage} from "../Pages/LoginByEmail"
import {credits} from "../Pages/CreditsOnAdmin"
import { BulkDeposit } from "../Pages/BulkDeposit"
import { Order } from "../Pages/NewOrder"
import { functions } from "cypress/types/lodash"


const loginpageobj = new loginpage()
const creditsobj = new credits()
const bulkdepositobj = new BulkDeposit()
const neworderobj = new Order();




it('Loginpage to Admin panel', function() {
    loginpageobj.naviagte('https://www.pakgari.com/admin/credits/');
    loginpageobj.Inputemail('adnan.aashiq@pakeventures.com');
    loginpageobj.InputPassword('Adnan212.');
    loginpageobj.ClickSignIn();
    loginpageobj.RemoveLoginBanne();
    loginpageobj.HoverOnProfile();
    loginpageobj.ToAdminPanel();
    creditsobj.NavigateToCreditsPage();
    bulkdepositobj.ClickOnBulkDepositButton();
    bulkdepositobj.CloseBulkDeposit();
    neworderobj.ClickOnNewOrderButton();
    neworderobj.InputCustomerID('635635');
    neworderobj.InputProduct('Bronze (Rs. 5,000)');
    neworderobj.InputQuantity('5');
    //neworderobj.InputTotalPrice()
    neworderobj.InputDiscount('0')
    //neworderobj.InputPayable('2000')
    neworderobj.InputPaymentMethod('Faysal Bank')
    neworderobj.InputComment('nothing')
    neworderobj.InputDate()
    neworderobj.ClickonPreview();
    neworderobj.ClickonBack()
    neworderobj.ClickonPreview();
    neworderobj.clickonSubmit()
})
