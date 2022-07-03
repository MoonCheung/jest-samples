import storage from '@/utils/storage';

describe('storage', () => {
  it('可设置缓存值', () => {
    storage.set('newKey', 'hello storage');
    expect(localStorage.getItem('my-app-newKey')).toEqual('hello storage');
  });

  it('可设置值', () => {
    localStorage.setItem('my-app-newKey', 'hello storage');
    expect(storage.get('newKey')).toEqual('hello storage');
  });
});
