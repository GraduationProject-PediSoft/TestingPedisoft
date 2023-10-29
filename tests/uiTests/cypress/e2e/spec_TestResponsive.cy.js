describe('template spec', () => {
  it('Visitar el sitio y cambiar el tamaño del navegador', () => {
    // Visita el sitio web
    cy.visit('http://tesis.10.43.101.226.nip.io')
    
    // Cambia el tamaño del navegador y realiza aserciones en cada paso
    cy.viewport(550, 750)
    cy.wait(100)
    // Realiza aserciones o acciones relacionadas con el tamaño del navegador si es necesario

    cy.viewport(768, 1024)
    cy.wait(100)
    // Realiza aserciones o acciones relacionadas con el tamaño del navegador si es necesario

    cy.viewport('iphone-6')
    cy.wait(100)
    // Realiza aserciones o acciones relacionadas con el tamaño del navegador si es necesario

    cy.viewport('ipad-2')
    cy.wait(100)
    // Realiza aserciones o acciones relacionadas con el tamaño del navegador si es necesario

    // Reestablece al tamaño por defecto (puedes usar 1000x660 u otra dimensión por defecto)
    cy.viewport(1000, 660)
    cy.wait(100)
    
    // Agrega más cambios de tamaño y aserciones si es necesario
  })
})
