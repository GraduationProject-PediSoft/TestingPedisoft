describe('Login and Verify Component Change', () => {
  it('Logs in and checks for component change', () => {
    // Visit the website
    cy.visit('http://tesis.10.43.101.226.nip.io');

    // Fill in the username field
    cy.get('input[formcontrolname="username"]').type('test');

    // Fill in the password field
    cy.get('input[type="password"]').type('1234');

    // Click the "Sign In" button
    cy.get('button[type="submit"]').click();

    // Assertions after logging in
    // Verify that certain elements are present and have specific text
    cy.get('body > app-root > app-home > div > app-header > nav > div > a > img').should('be.visible');
    cy.get('body > app-root > app-home > div > app-header > nav > div > a > span')
      .should('be.visible')
      .and('have.text', 'Pedisoft');
    cy.get('span.font-bold.text-lg').should('be.visible').and('have.text', 'Información');
    cy.get('.c-wrapper .nav-item[href="https://github.com/GraduationProject-PediSoft"]').should('be.visible');
    cy.get('a[routerlink="help"]').contains('Ayuda').should('be.visible');
  });
});
