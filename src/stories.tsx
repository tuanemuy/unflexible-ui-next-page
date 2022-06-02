import React from 'react';
import { Story, Meta } from '@storybook/react';
import Page, { Props } from './Page';
import { UnflexibleProvider } from 'unflexible-ui-core';

export default {
  title: 'Page',
  component: Page,
} as Meta;

const Template: Story<Props> = (args) => {
  return (
    <UnflexibleProvider config={{}}>
      <Page {...args} />
    </UnflexibleProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'ページタイトル',
  description: '',
  header: <p>ヘッダー</p>,
  footer: <p>フッター</p>,
  children: (
    <p>テスト</p>
  ),
};
