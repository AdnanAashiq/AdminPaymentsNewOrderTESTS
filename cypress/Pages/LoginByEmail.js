export class loginpage{
    emailfield_locator= ':nth-child(4) > #username';
    passwordfield_locator = ':nth-child(5) > #password';
    SignInbutton_locator = ':nth-child(6) > .btn';
    Loginbanner_locator = 'NO THANKS';
    Hover_locator = '.username.dropdown-toggle';
    Admincontrolpanel_locator = 'Admin Control Panel';
    

    naviagte(url){
        cy.visit(url)
    }
    Inputemail(email){
        cy.get(this.emailfield_locator).type(email)
    }
    InputPassword(password){
        cy.get(this.passwordfield_locator).type(password)
    }
    ClickSignIn(){
        cy.get(this.SignInbutton_locator).click()
    }
    RemoveLoginBanne(){
        cy.contains(this.Loginbanner_locator).click()
    }
    HoverOnProfile(){
        cy.get(this.Hover_locator).click();
    }
    ToAdminPanel(){
        cy.contains(this.Admincontrolpanel_locator).click();
    }

}