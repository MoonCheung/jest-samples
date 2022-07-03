import reducer, { updateUserName } from 'store/user/reducer';

describe('reducer', () => {
  describe('测试 reducer', () => {
    describe('updateUserName', () => {
      it('可以更新用户姓名', () => {
        // 测试 reducer 纯函数
        const currentState = reducer(
          {
            id: '',
            name: '',
            age: 0,
            status: ''
          },
          updateUserName({ name: 'hello' })
        );

        expect(currentState.name).toEqual('hello');
      });
    });
  });
});
