describe('template spec', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verificando titulo da página', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenchendo um campo', () => {
    cy.get('#firstName').as('nome').type('Renan').should('have.value', 'Renan')

    cy.get('#lastName').type('Santiago').should('have.value', 'Santiago')

    cy.get('#email').type('renan.santiago@email.com').should('have.value', 'renan.santiago@email.com')

    cy.get('#phone').type('22123456789').should('have.value', '22123456789')

    cy.get('#open-text-area').type('Testando testando 12', { delay: 100 }).should('have.value', 'Testando testando 12')

    cy.get('.button').click()
    
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o fomrmulário com um email com formatação inválida', () => {
    cy.get('#firstName').as('nome').type('Renan').should('have.value', 'Renan')

    cy.get('#lastName').type('Santiago').should('have.value', 'Santiago')

    cy.get('#email').type('renan.santiago@').should('have.value', 'renan.santiago@')

    cy.get('#phone').type('22123456789').should('have.value', '22123456789')

    cy.get('#open-text-area').type('Testando testando 12', { delay: 100 }).should('have.value', 'Testando testando 12')

    cy.get('.button').click()

    cy.get('.error').should('be.visible')
  })

  it('testa se o campo telefone aceita caracteres nao numericos', () => {
    cy.get('#phone').type('abcde').should('have.value', '')
  })

  it('da erro quando enviamos o formulario com a checkbox de telefone marcada mas o campo vazio', () => {
    cy.get('#firstName').as('nome')
    .type('Renan')
    .should('have.value', 'Renan')

    cy.get('#lastName')
    .type('Santiago')
    .should('have.value', 'Santiago')

    cy.get('#email')
    .type('renan.santiago@email.com')
    .should('have.value', 'renan.santiago@email.com')

    cy.get('#phone')
    .should('be.empty')

    cy.get('#phone-checkbox')
    .should('not.be.checked')
    .click()
    .should('be.checked')

    cy.get('#open-text-area')
    .type('Testando testando 12', { delay: 100 })
    .should('have.value', 'Testando testando 12')

    cy.get('.button').click()

    cy.get('.error').should('be.visible')
  })

  it('escreve e da o .clear novamente', () => {
    cy.get('#firstName').as('nome')
    .type('Renan', {delay:100})
    .should('have.value', 'Renan')
    .clear()
    .should('have.value','')

    cy.get('#lastName')
    .type('Santiago', {delay:100})
    .should('have.value', 'Santiago')
    .clear()
    .should('have.value','')

    cy.get('#email')
    .type('renan.santiago@email.com', {delay:100})
    .should('have.value', 'renan.santiago@email.com')
    .clear()
    .should('have.value','')

    cy.get('#phone')
    .type('22123456789', {delay:100})
    .should('have.value','22123456789')
    .clear()
    .should('have.value','')
  })

  it('checa se da erro ao clicar no botao enviar com os campos vazios', () => {

    cy.get('.button').click()

    cy.get('.error').should('be.visible')
  })

  it('checa com um comando personalizado', () => {

    cy.comandos()
  
    cy.get('.button').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem por 3 segundos', function() {
  cy.clock() // congela o relógio do navegador
  cy.comandos()
  cy.contains('button', 'Enviar').click()
  cy.get('.success').should('be.visible')
  cy.tick(3000) 
  cy.get('.success').should('not.be.visible')  
})


  it('checa com um comando personalizado', () => {
    Cypress._.times(3, () => {
    
    cy.comandos()
  
     cy.contains('button', 'Enviar').click()

     cy.get('.success').should('be.visible')
    })
  })

  it('seleciona um produto youtube por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto mentoria por seu valor', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto blog por seu index', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })
  it('marcando o tipo de atendimento "feedback" pelo check', () => {
    cy.comandos()
    cy.get('input[type="radio"][value="feedback"]').check()
      .should('be.checked')
  })

  
  it('marcando os tipos de atendimento pelo type of service e wrap', () => {
    cy.comandos()
    cy.get('input[type="radio"]').each(TypeofService => {
      cy.wrap(TypeofService).check()
      cy.wrap(TypeofService).should('be.checked')
    })
  })

    it('marcando os checkbox e desmarcando o primeiro, deixando so o ultimo', () => {
    /*cy.comandos()*/
      cy.get('input[type="checkbox"]').check()
      cy.get('input[type="checkbox"]').should('be.checked')
      cy.get('input[type="checkbox"]').last().uncheck().should("not.be.checked")
    })

    it('mensagem de erro quando o telefone se torna obrigatorio mas nao e preenchido',  () => {
      cy.comandos()
      cy.get('#phone').clear().should('be.empty')
      cy.get('#phone-checkbox').check().should('be.checked')
      cy.get('.button').click()
      cy.get('.error').should('be.visible')
    })

    it('seleciona um arquivo da pasta fixtures', () => {
      cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json')
        .should('have.prop', 'files')
    })
    
    it('seleciona um arquivo simulando um drag and drop', () => {
      cy.get('input[type="file"]').selectFile('./cypress/fixtures/example.json', {action : 'drag-drop'})
        .should('have.prop', 'files')
    })

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
      cy.fixture('example.json').as('sampleFile')
      cy.get('input[type="file"]').selectFile('@sampleFile')
        .should('have.prop', 'files')
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
      cy.get('a').should('have.attr','target','_blank').and('have.attr','href','privacy.html')
      
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
      cy.get('a').invoke('removeAttr','target').click()
      cy.contains('Política de Privacidade').should('be.visible')
    })

    it('mostra e esconde as mensagens de erro e sucesso', () => {
      cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')
      cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
      })
    
    it('preenche o campo da área de texto usando o comando invoke', () => {
      cy.get('#open-text-area').invoke('val', 'um texto qualquer')
      cy.get('#open-text-area').should('have.value','um texto qualquer')
    })

    it('faz uma requisição HTTP', () => {
      cy.request('GET', 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .should((response) => {
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        expect(response.body).to.include('CAC TAT')
      })
    })

    it('acha o gato', () => {
      cy.get('#cat').invoke('show').should('be.visible')
    })
   /*
  it('verifica que a politica de privacidade abre em outra aba sem a necessidade de um clique'), () => {
    
    cy.get('a[href="privacy.html"]')
      .should('have.attr', 'target', '_blank')
      .and('have.attr','href','pricacy.html')
  }
 it('testa a página da política de privacidade de forma independente'), () => {
    cy.get('a[href = "privacy.html"]').should('be.visible')
  }*/
})