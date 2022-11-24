const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('Classe Fornecedor', () => {
  it('O método validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    expect(fornecedor.validar()).toBe(true)
  })
});
