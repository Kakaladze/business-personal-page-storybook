import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '../components/Text';
import { Overlay } from '../components/Overlay';

const meta = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
decorators: [
    (Story) => (
      <div style={{ background: '#0b1220', height: '500px', width: '100%', boxSizing: 'border-box' }}>
        <Text> That's example text that will be blurred after turning "isOpen" to true</Text>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: false,
    onClick: () => alert('Hello')
  },
};