describe('template spec', () => {
  it('Iniciar sesión y verificar elementos en la página de inicio', () => {
    cy.visit('http://tesis.10.43.101.226.nip.io');
// Borrar todas las variables del Local Storage
    cy.clearLocalStorage();


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
    


  });
});
