describe('Verify Step Sequence in the Service Component', () => {
  it('Logs in and checks the sequence of steps in the Service component', () => {
    // Visit the website
    cy.visit('http://tesis.10.43.101.226.nip.io');

    // Fill in the username field
    cy.get('input[formcontrolname="username"]').type('test');

    // Fill in the password field
    cy.get('input[type="password"]').type('1234');

    // Click the "Sign In" button
    cy.get('button[type="submit"]').click();

    // Navigate to the Service component
    cy.get('a[routerlinkactive="nav-item-selected"][href="/home/algorithm"]').click();

    // Verify the URL
    cy.url().should('eq', 'http://tesis.10.43.101.226.nip.io/home/algorithm');

    // Verify the presence of each <li> element in the list
    cy.get('ul[role="tablist"] li[role="presentation"]').should('have.length', 4);

    // Evaluate the presence of each <li> element individually
    cy.get('ul[role="tablist"] li[role="presentation"]').each(($li, index) => {
      // Verify that the <li> element is visible
      cy.wrap($li).should('be.visible');

      // Evaluate other attributes or content of the <li> element if necessary
      if (index === 0) {
        // Verify specific properties for the first element
      } else {
        // Verify different properties for the other elements
      }
    });

    // Verify that the first element in the list is clickable
    cy.get('ul[role="tablist"] li[role="presentation"]').eq(0).find('a[tabindex="0"]').should('be.visible');

    // Verify that the other elements are not clickable
    cy.get('ul[role="tablist"] li[role="presentation"]').eq(1).find('a[tabindex="-1"]').should('be.visible');
    cy.get('ul[role="tablist"] li[role="presentation"]').eq(2).find('a[tabindex="-1"]').should('be.visible');
    cy.get('ul[role="tablist"] li[role="presentation"]').eq(3).find('a[tabindex="-1"]').should('be.visible');
  });
});
