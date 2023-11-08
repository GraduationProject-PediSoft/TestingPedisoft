# Pruebas Automatizadas con Cypress

Este proyecto utiliza [Cypress](https://www.cypress.io/), un framework de pruebas de extremo a extremo para realizar pruebas automatizadas en una aplicación web. Cypress permite automatizar acciones de usuario y verificar el comportamiento de la aplicación.

## Requisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Project-PediSoft/Testing.git


2. Navega al directorio del proyecto:
   ```bash
   cd Testing

3. Instala las dependencias:
   ```bash
   npm install

## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:
        
       npm run cypress:open


Esto abrirá la interfaz de Cypress, donde podrás seleccionar y ejecutar pruebas individuales o en conjunto.

![gif](https://github.com/Project-PediSoft/Testing/assets/75964273/f23a5120-d70c-473f-a2c2-4db016713f73)


## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `cypress/` - Contiene las pruebas Cypress.
- `cypress/e2e/` - Aquí se encuentran los archivos de pruebas.
- `cypress/support/` - Contiene archivos de soporte para configuración.
- `cypress/fixtures/` - Contiene complementos personalizados.
- `cypress/results/` - Contiene reportes de Mocha.
- `jmeter/` - Contiene las pruebas Jmeter (independiente).

## Personalización

Siéntete libre de personalizar las pruebas para adaptarlas a tu aplicación web. Puedes agregar más pruebas en `cypress/e2e/` y modificar la configuración en `cypress/support/`.

## Reportes
Mochawesome Report es un complemento para Mocha que genera informes de pruebas visuales y detallados en formato HTML, facilitando la visualización y el seguimiento de los resultados de las pruebas en proyectos de desarrollo de software.

![image](https://github.com/Project-PediSoft/Testing/assets/75964273/4299b74c-df7c-43d1-9d9c-176930b75aa6)


## Colaboración

Si deseas contribuir a este proyecto, puedes hacerlo a través de [pull requests](https://github.com/Project-PediSoft/Testing/pulls).
