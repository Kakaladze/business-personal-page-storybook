import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: {
    text: 'Test',
    primary: true,
  }
};

export const SecondaryButton: Story = {
  args: {
    text: 'Test',
    primary: false,
  }
};

export const FullWidthButton: Story = {
  args: {
    text: 'Test',
    primary: false,
    fullWidth: true
  }
}