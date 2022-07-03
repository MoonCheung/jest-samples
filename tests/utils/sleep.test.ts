import sleep from "utils/sleep";

describe('sleep', () => {
  it('可以睡眠 1000ms', async () => {
    jest.useFakeTimers();

    const act = async(callback: () => void) => {
      await sleep(1000);
      callback();
    }
 
    const mockCallback = jest.fn();

    const promise = act(mockCallback);

    // mockCallback 还未调用
    expect(mockCallback).not.toBeCalled();

    // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
    jest.runAllTimers();

    // 执行 callback 内容
    await promise;
    
    // mockCallback 已调用
    expect(mockCallback).toBeCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  })
})