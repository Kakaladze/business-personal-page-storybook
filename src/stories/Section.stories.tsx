import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from '../components/Section';

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
  }
};