/// <reference types="cypress" />

describe('La app puede saludarme', () => {
  it('Puedo entrar a la pagina', () => {
    cy.visit('/')
  })

  it('El estado inicial de la pagina es el correcto', () =>{
    cy.get('#name-input')
      .should('be.visible')

    cy.get('#name-btn')
      .should('be.visible')

    cy.get('#greeting')
      .should('not.exist')
  })

  it('La pagina me saluda', () => {
    cy.get('#name-input')
      .type('Jason Chicas')

    cy.get('#name-btn')
      .click()

    cy.get('#greeting')
      .should('have.text', 'Hey Bienvenido a Cypress, Jason Chicas')
  })
})