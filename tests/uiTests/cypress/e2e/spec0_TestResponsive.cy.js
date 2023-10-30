describe('Template Spec', () => {
  it('Visits the site and changes the browser size', () => {
    // Visit the website
    cy.visit('http://tesis.10.43.101.226.nip.io');

    // Define an array of viewport sizes
    const viewportSizes = [
      [550, 750],
      [768, 1024],
      'iphone-6',
      'ipad-2',
      [1000, 660], // Default viewport size
      [1500, 660]
      // Add more viewport sizes as needed
    ];

    // Loop through the viewport sizes
    viewportSizes.forEach((size) => {
      // Check if the size is an array (width and height)
      if (Array.isArray(size)) {
        const [width, height] = size;
        cy.viewport(width, height);
      } else {
        // Use a preset string
        cy.viewport(size);
      }

      cy.wait(100);

      // Perform assertions or actions related to the viewport size if necessary
      // Customize these assertions as needed
      cy.get('body').should('have.css', 'width');
      cy.get('body').should('have.css', 'height');
    });
  });
});
