import { env } from 'utils/env';

const originEnv = { env };

describe('env', () => {
  afterEach(() => {
    // envUtils.env = originEnv;
    // 解决方案一：
    Object.defineProperty(originEnv, 'env', {
      value: originEnv.env,
      writable: true
    });
  });

  it('开发环境', () => {
    // envUtils.env = 'dev'
    // 解决方案一：
    Object.defineProperty(originEnv, 'env', {
      value: 'dev',
      writable: true
    });

    expect(originEnv.env).toEqual('dev');
  });

  it('正式环境', () => {
    // envUtils.env = 'prod'
    // 解决方案一：
    Object.defineProperty(originEnv, 'env', {
      value: 'prod',
      writable: true
    });

    expect(originEnv.env).toEqual('prod');
  });
});
