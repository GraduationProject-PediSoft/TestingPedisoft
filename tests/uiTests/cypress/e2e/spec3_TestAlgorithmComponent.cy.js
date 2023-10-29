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


   // Verificar la presencia de cada elemento <li> en la lista
cy.get('ul[role="tablist"] li[role="presentation"]').should('have.length', 4);

// Evaluar la presencia de cada elemento <li> individualmente
cy.get('ul[role="tablist"] li[role="presentation"]').each(($li, index) => {
  // Verificar que el elemento <li> esté presente
  cy.wrap($li).should('be.visible');

  // Evaluar otros atributos o contenido del elemento <li> si es necesario
  if (index === 0) {
    // Verificar que el primer elemento tenga ciertas propiedades
  } else {
    // Verificar que los otros elementos tengan propiedades diferentes
  }
});


// Verificar que el primer elemento de la lista sea clickeable
cy.get('ul[role="tablist"] li[role="presentation"]').eq(0).find('a[tabindex="0"]').should('be.visible');

// Verificar que los otros elementos no sean clickeables
cy.get('ul[role="tablist"] li[role="presentation"]').eq(1).find('a[tabindex="-1"]').should('be.visible');
cy.get('ul[role="tablist"] li[role="presentation"]').eq(2).find('a[tabindex="-1"]').should('be.visible');
cy.get('ul[role="tablist"] li[role="presentation"]').eq(3).find('a[tabindex="-1"]').should('be.visible');



  });
});
