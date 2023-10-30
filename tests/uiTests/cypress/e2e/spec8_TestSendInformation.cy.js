// Define the number of test repetitions
const numRepeats = 5; // Change this to your desired number of repetitions

// Describe block for the test
describe('Test Repeating Scenario: Verify Data Submission, Image + Form', () => {
  for (let i = 0; i < numRepeats; i++) {
    it(`Execution ${i + 1}: Verify Data Submission, Image + Form`, () => {
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
        // Verify if there are <p> elements in the dropdown
        if ($elements.length > 0) {
          // Generate a random index
          const randomIndex = Math.floor(Math.random() * $elements.length);
      
          // Click on a random <p> element
          cy.wrap($elements[randomIndex]).click();
        }
        // If there are no <p> elements, no action will be performed
      });
  
      // Wait for 100 milliseconds (customize as needed)
      cy.wait(100);
  
      // Click a button
      cy.get('form > p-button > button > span').should('be.visible').click();
  
      // Click the dropdown for service form submission
      cy.get('#pn_id_12_content > form p-dropdown div span').click();
  
      // Get the list of elements <li>
      cy.get('#pn_id_16_list li[role="option"]').then(($options) => {
        // Get a random index between 0 and the number of elements - 1
        const randomIndex = Cypress._.random(0, $options.length - 1);
  
        // Select the random element by clicking on it
        cy.wrap($options[randomIndex]).click();
      });
  
      // Click a button
      cy.get('#pn_id_12_content > form > p-button > button > span').should('be.visible').click();
  
      // Find and interact with all non-readonly input elements
      cy.get('input').not('[readonly]').each(($input) => {
        // Get the input type
        const inputType = $input.attr('type');
        try {
          switch (inputType) {
            case 'text':
              cy.wrap($input).type('high');
              break;
            case 'number':
              cy.wrap($input).type(1);
              break;
            // Add more cases for other input types as needed
            default:
              // If no specific input type is found, fill with a default value
              break;
          }
        } catch (error) {
          // Handle any errors that may occur here, e.g., print them to the console
          console.error('Error filling the input:', error.message);
        }
      });
  
      // Verify that the element is visible and click on it
      cy.get('#pn_id_13_content > app-algorithm-form > form > div > app-algorithm-form-tag > div > p-fileupload > div > span > span')
        .should('be.visible')
        .click();
  
      // Select a simulated file
      cy.get("[type='file']").selectFile({
        contents: 'cypress/fixtures/image.dicom',
        fileName: 'image.dicom',
        mimeType: 'application/dicom',
        lastModified: Date.now()
      }, {force: true});
  
      // Click a button
      cy.get('#pn_id_13_content app-algorithm-form form p-button button span').click();
    });
  }
});
