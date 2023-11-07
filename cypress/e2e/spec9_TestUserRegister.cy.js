describe('User Management', () => {
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
