import { getEnv } from 'utils/env';

const envUtils = { getEnv };

describe('getEnv', () => {
  it('开发环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('dev');

    expect(envUtils.getEnv()).toEqual('dev');
  });

  it('正式环境', () => {
    jest.spyOn(envUtils, 'getEnv').mockReturnValue('prod');

    expect(envUtils.getEnv()).toEqual('prod');
  });
});
