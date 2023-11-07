describe('Verify Algorithm Selection and Service Form Submission', () => {
  it('Logs in and checks algorithm selection and service form submission', () => {
    // Visit the website
    cy.visit('http://tesis.10.43.101.226.nip.io');

    // Fill in the username field
    cy.get('input[formcontrolname="username"]').type('test');

    // Fill in the password field
    cy.get('input[type="password"]').type('1234');

    // Click the "Sign In" button
    cy.get('button[type="submit"]').click();

    // Navigate to the Algorithm component
    cy.get('a[routerlinkactive="nav-item-selected"][href="/home/algorithm"]').click();

    // Verify the URL
    cy.url().should('eq', 'http://tesis.10.43.101.226.nip.io/home/algorithm');

    // Click the dropdown for algorithm selection
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

    // Click the dropdown for service form submission
    cy.get('#pn_id_12_content > form p-dropdown div span').click();

    // Get the list of <li> elements
    cy.get('#pn_id_16_list li[role="option"]').then(($options) => {
      // Generate a random index between 0 and the number of elements - 1
      const randomIndex = Cypress._.random(0, $options.length - 1);

      // Select the random element by clicking on it
      cy.wrap($options[randomIndex]).click();
    });

    // Verify the visibility of a button and click it
    cy.get('#pn_id_12_content > form > p-button > button > span').should('be.visible').click();
  });
});
