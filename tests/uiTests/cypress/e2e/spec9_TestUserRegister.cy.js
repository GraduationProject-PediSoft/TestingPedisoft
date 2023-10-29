describe('template spec', () => {
    it('Iniciar sesión y verificar elementos en la página de inicio', () => {
      cy.visit('http://tesis.10.43.101.226.nip.io');
      // Rellena el campo de usuario
      cy.get('input[formcontrolname="username"]').type('test');
      
      // Rellena el campo de contraseña
      cy.get('input[type="password"]').type('1234');
  
      // Haz clic en el botón "Iniciar"
      cy.get('button[type="submit"]').click();
  
      cy.get('a[routerlinkactive="nav-item-selected"][href="/home/users"]').click();   

    
      cy.get('#pn_id_11_header_action > span').click();

        
        // Llena el campo "Nombre de usuario" o cualquier otro campo necesario para identificar al usuario a eliminar
        cy.get('input#username').eq(1).type('nombredeusuario');

        // Hacer clic en el botón "Enviar" para eliminar al usuario
        cy.get('#pn_id_11_content > app-delete-user > form > p-button > button > span').click();

        cy.get('#pn_id_10_header_action > span').click();

        cy.wait(100);

       // Llenar el campo "Nombre de usuario"
       cy.get('input#username').eq(0).type('nombredeusuario');

       // Llenar el campo "Contraseña"
       cy.get('#password > div > input').type('contrasena');
 
       // Llenar el campo "Correo"
       cy.get('input#email').type('correo@ejemplo.com');
 
       // Hacer clic en el botón "Enviar"
       cy.get('button[type="submit"]').eq(0).click();


      
        
    });
  });
  