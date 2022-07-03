import getGreeting from 'utils/getPlanet';

describe('getGreeting', () => {
  it('默认值', () => {
    expect(getGreeting()).toBe('hello world!');
  });

  it('输出 mars', () => {
    expect(getGreeting(() => 'mars')).toBe('hello mars!');
  });

  it('输出 jupiter', () => {
    expect(getGreeting(() => 'jupiter')).toBe('hello jupiter!');
  });

  it('回到默认值', () => {
    expect(getGreeting()).toBe('hello world!');
  });
});