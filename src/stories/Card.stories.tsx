import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {
  alert("Button clicked!");
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    headerText: 'Hello Theme!',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lobortis quam. Nunc a risus quis eros ullamcorper pellentesque. Donec in magna ac justo porttitor volutpat. Donec porttitor fringilla vehicula. Ut et dui turpis. Sed malesuada, mi vitae ullamcorper consequat, nibh urna molestie massa, nec faucibus nisi augue vel nisl. Duis nec malesuada velit.',
    hoverAnimation: true,
    buttons: [
      { text: 'Demo', primary: true, onClick: handleClick, fullWidth: true},
      { text: 'GitHub', primary: false }
    ]
  }
};