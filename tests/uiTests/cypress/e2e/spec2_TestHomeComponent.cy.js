describe('template spec', () => {
  it('Iniciar sesión y verificar elementos en la página de inicio', () => {
    cy.visit('http://tesis.10.43.101.226.nip.io');
    // Rellena el campo de usuario
    cy.get('input[formcontrolname="username"]').type('test');
    
    // Rellena el campo de contraseña
    cy.get('input[type="password"]').type('1234');

    // Haz clic en el botón "Iniciar"
    cy.get('button[type="submit"]').click();

    // Realiza aserciones después del inicio de sesión
    // Verifica que ciertos elementos estén presentes o tengan un texto específico
    // Ejemplos:
    cy.get('body > app-root > app-home > div > app-header > nav > div > a > img').should('be.visible');
    cy.get('body > app-root > app-home > div > app-header > nav > div > a > span').should('be.visible').and('have.text', 'Pedisoft');
    cy.get('span.font-bold.text-lg').should('be.visible').and('have.text', 'Información');
    cy.get('.c-wrapper .nav-item[href="https://github.com/GraduationProject-PediSoft"]').should('be.visible');
    cy.get('a[routerlink="help"]').contains('Ayuda').should('be.visible');
  });
});
