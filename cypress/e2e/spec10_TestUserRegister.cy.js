describe('All Tests', () => {
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

  describe('Verify Form Field Functionality', () => {
    it('Logs in and checks form field functionality', () => {
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
  
      // Click a button
      cy.get('form > p-button > button > span').should('be.visible').click();
  
      // Click the dropdown for service form submission
      cy.get('#pn_id_12_content > form p-dropdown div span').click();
  
      // Get the list of elements <li>
      cy.get('#pn_id_16_list li[role="option"]').then(($options) => {
        const randomIndex = Cypress._.random(0, $options.length - 1);
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
              cy.wrap($input).type('1');
              break;
            case 'number':
              cy.wrap($input).type('1');
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
    });
  });

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





  it('Login, Delete User, Create User, and Logout', () => {
    // Visit the website
    cy.visit('http://tesis.10.43.101.226.nip.io');

    // Fill in the username field
    cy.get('input[formcontrolname="username"]').type('test');
    
    // Fill in the password field
    cy.get('input[type="password"]').type('1234');

    // Click the "Sign In" button
    cy.get('button[type="submit"]').click();

    // Navigate to the Users component
    cy.get('a[routerlinkactive="nav-item-selected"][href="/home/users"]').click();

    // Click the button for user deletion
    cy.get('#pn_id_11_header_action > span').click();

    // Fill in the "Username" field or any other necessary field to identify the user to delete
    cy.get('input#username').eq(1).type('testUser');

    // Click the "Submit" button to delete the user
    cy.get('#pn_id_11_content > app-delete-user > form > p-button > button > span').click();

    // Click the button for creating a new user
    cy.get('#pn_id_10_header_action > span').click();

    // Wait for 100 milliseconds (customize as needed)
    cy.wait(100);

    // Fill in the "Username" field
    cy.get('input#username').eq(0).type('testUser');

    // Fill in the "Password" field
    cy.get('#password > div > input').type('password');

    // Fill in the "Email" field
    cy.get('input#email').type('test@example.com');

    // Click the "Submit" button
    cy.get('button[type="submit"]').eq(0).click();

    // Click the "Logout" button
    cy.get('li:nth-child(5) > p-button > button > span').eq(0).click();
  });
});
