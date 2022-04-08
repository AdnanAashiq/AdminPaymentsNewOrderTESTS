/// <reference types="Cypress" />


import {loginpage} from "../Pages/LoginByEmail"

const loginpageobj = new loginpage()

it('random value form dropdown', function(){
    loginpageobj.naviagte('https://www.pakgari.com/');
    loginpageobj.RemoveLoginBanne();
    
})