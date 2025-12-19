Cypress.Commands.add('comandos', () => {
    cy.get('#firstName').as('nome').type('Renan').should('have.value', 'Renan')

    cy.get('#lastName').type('Santiago').should('have.value', 'Santiago')

    cy.get('#email').type('renan.santiago@email.com').should('have.value', 'renan.santiago@email.com')

    cy.get('#phone').type('22123456789').should('have.value', '22123456789')

    cy.get('#open-text-area').type('Testando testando 12', { delay: 100 }).should('have.value', 'Testando testando 12')
})