describe('Login and Verify Elements on the Home Page', () => {
  it('Logs in and checks elements on the home page', () => {
    // Visit the website
    cy.visit('http://tesis.10.43.101.226.nip.io');

    // Fill in the username field
    cy.get('input[formcontrolname="username"]').type('test');

    // Fill in the password field
    cy.get('input[type="password"]').type('1234');

    // Click the "Sign In" button
    cy.get('button[type="submit"]').click();

    // Assertions after logging in
    // Verify that certain elements are present or have specific text
    // Examples:
    cy.url().should('eq', 'http://tesis.10.43.101.226.nip.io/home');
    // Add more assertions as needed
  });
});
