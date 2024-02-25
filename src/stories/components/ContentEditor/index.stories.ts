import type { Meta, StoryObj } from '@storybook/react';
import ContentEditor from '../../../components/ContentEditor';

const meta = {
  title: 'components/ContentEditor',
  component: ContentEditor,
  tags: ['autodocs'],
  args: {
    value: '',
    setValue: () => {},
    isFocused: true,
  },
} satisfies Meta<typeof ContentEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FiledText: Story = {
  args: {
    value: '안녕하세요',
  },
};
