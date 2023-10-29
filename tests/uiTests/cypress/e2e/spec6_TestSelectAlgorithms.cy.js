describe('template spec', () => {
  it('Iniciar sesión y verificar elementos en la página de inicio', () => {
    cy.visit('http://tesis.10.43.101.226.nip.io');
    // Rellena el campo de usuario
    cy.get('input[formcontrolname="username"]').type('test');
    
    // Rellena el campo de contraseña
    cy.get('input[type="password"]').type('1234');

    // Haz clic en el botón "Iniciar"
    cy.get('button[type="submit"]').click();

    cy.get('a[routerlinkactive="nav-item-selected"][href="/home/algorithm"]').click();

    cy.url().should('eq', 'http://tesis.10.43.101.226.nip.io/home/algorithm');

    cy.get('#pn_id_10_content form div p-dropdown div span').click();

    cy.get('#pn_id_11_list .p-dropdown-item').find('span').then(($elements) => {
      // Verificar si hay elementos <p> dentro de la lista desplegable
      if ($elements.length > 0) {
        // Generar un índice aleatorio
        const randomIndex = Math.floor(Math.random() * $elements.length);
    
        // Hacer clic en un elemento <p> al azar
        cy.wrap($elements[randomIndex]).click();
      }
      // Si no hay elementos <p>, no se realizará ninguna acción
    });
    cy.wait(100)

    cy.get('form >p-button > button > span').should('be.visible').click();

    cy.get('#pn_id_12_content > form > p-dropdown > div > span').click();

        // Obtén la lista de elementos p
    cy.get('#pn_id_16_list li[role="option"]').then(($options) => {
      // Obtén un índice aleatorio entre 0 y la cantidad de elementos - 1
      const randomIndex = Cypress._.random(0, $options.length - 1);

      // Selecciona el elemento aleatorio haciendo clic en él
      cy.wrap($options[randomIndex]).click();
    });

    cy.get('#pn_id_12_content > form > p-button > button > span').should('be.visible').click();


  });
});
