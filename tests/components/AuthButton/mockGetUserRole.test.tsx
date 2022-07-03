import React from 'react';
import { getUserRole } from 'api/user';
import AuthButton from 'components/AuthButton';
import { render, screen } from '@testing-library/react';
import { AxiosResponse } from 'axios';

const userUtils = { getUserRole };

// 更偏向细节，效果并不好
describe('AuthButton Mock Axios', () => {
  it('可以正确展示普通用户按钮内容', async () => {
    jest.spyOn(userUtils, 'getUserRole').mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: 'user' }
    } as AxiosResponse);

    render(<AuthButton>普通用户你好</AuthButton>);

    expect(await screen.findByText('普通用户你好')).toBeInTheDocument();
  });

  it('可以正确展示管理员按钮内容', async () => {
    jest.spyOn(userUtils, 'getUserRole').mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: 'admin' }
    } as AxiosResponse);

    render(<AuthButton>管理员你好</AuthButton>);

    expect(await screen.findByText('管理员你好')).toBeInTheDocument();
  });
});
