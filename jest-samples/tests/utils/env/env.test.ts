import * as envUtils from 'utils/env';

const originEnv = envUtils.env;

describe("env", () => {
  afterEach(() => {
    // @ts-ignore
    // envUtils.env = originEnv;
    // 解决方案一：
    Object.defineProperty(envUtils, 'env', {
      value: originEnv,
      writable: true,
    })
  })

  it('开发环境', () => {
    // @ts-ignore
    // envUtils.env = 'dev'
    // 解决方案一：
    Object.defineProperty(envUtils, 'env', {
      value: 'dev',
      writable: true,
    })

    expect(envUtils.env).toEqual('dev');
  })

  it('正式环境', () => {
    // @ts-ignore
    // envUtils.env = 'prod'
    // 解决方案一：
    Object.defineProperty(envUtils, 'env', {
      value: 'prod',
      writable: true,
    })

    expect(envUtils.env).toEqual('prod');
  })
});