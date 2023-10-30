describe('Verify Service Information Retrieval', () => {
  it('Logs in and checks service information retrieval', () => {
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

    // Click the dropdown for service selection
    cy.get('#pn_id_10_content form div p-dropdown div span').click();

    // Check if there are <p> elements within the dropdown list
    cy.get('#pn_id_11_list .p-dropdown-item').find('span').then(($elements) => {
      if ($elements.length > 0) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * $elements.length);

        // Click on a random <p> element
        cy.wrap($elements[randomIndex]).click();
      }
      // If there are no <p> elements, no action will be performed
    });

    // Wait for 100 milliseconds (customize this as needed)
    cy.wait(100);

    // Verify the visibility of a button and click it
    cy.get('form > p-button > button > span').should('be.visible').click();
  });
});
