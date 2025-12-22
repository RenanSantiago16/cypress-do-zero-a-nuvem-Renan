describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://auth.hml.itixti-lab.com.br/auth/realms/itixup-2025/protocol/openid-connect/auth?client_id=xrh&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fsignin&response_type=code&scope=openid%20profile&state=6ee71789e8e0430ba08794614477bfda&code_challenge=JG_lI2TuHBIxEGKgUxQqhguPyvUscDfadEZolZOe64s&code_challenge_method=S256&response_mode=query')

})

  it('fazendo login', () => {
    cy.get('input[id = "username"]').type('admin').should('have.value', 'admin')
    cy.get('input[id = "password"]').type('admin').should('have.value', 'admin')
    cy.get('input[type="submit"]').click()
    cy.get('a.app-header_logo').click()
    cy.wait(99999999999)
  })
})