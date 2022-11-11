const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Verifica se retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Verifica se retorna a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica se retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Verifica se retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });

  it('Verifica se retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Verifica se retorna a mensagem de erro', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se o argumento passado não contemplar nenhuma funcionalidade retorna null', () => {
    expect(handlerElephants('random')).toBe(null);
  });
});
