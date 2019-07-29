import foo from './foo';

describe('foo', () => {
  it('bar', async () => {
    expect(await foo()).toBe(1);
  });
});
