import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Storybook } from './Storybook';

export default {
  component: Storybook,
  title: 'Storybook',
} as ComponentMeta<typeof Storybook>;

const Template: ComponentStory<typeof Storybook> = (args) => (
  <Storybook {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
