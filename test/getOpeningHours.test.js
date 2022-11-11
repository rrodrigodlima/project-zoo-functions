const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se caso não seja passado nenhum argumento retorna o objeto', () => {
    expect(getOpeningHours()).toMatchObject({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Verifica se retorna a string -The zoo is closed-', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('Verifica se retorna a string -The zoo is open-', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('Verifica se retorna a string -The zoo is closed-', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('Verifica se retorna a mensagem 1', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });

  it('Verifica se retorna a mensagem 2', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });

  it('Verifica se retorna a mensagem 3', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00AM')).toThrow(/^The hour should represent a number$/);
  });

  it('Verifica se retorna a mensagem 4', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });

  it('Verifica se retorna a mensagem 5', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });

  it('Verifica se retorna a mensagem 6', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
