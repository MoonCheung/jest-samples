import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from 'components/Title';

describe('Title', () => {
  it('可以正确渲染大字', () => {
    render(<Title type='large' title='大字' />);
    const content = screen.getByText('大字');
    expect(content).toMatchSnapshot();
  });

  it('可以正确渲染小字', () => {
    render(<Title type='small' title='小字' />);
    const content = screen.getByText('小字');
    expect(content).toMatchSnapshot();
  });
});
