export class credits{
    creditpage_locator = 'Payments';
    
    NavigateToCreditsPage(){
        cy.contains(this.creditpage_locator).click({ force: true });
    }

}