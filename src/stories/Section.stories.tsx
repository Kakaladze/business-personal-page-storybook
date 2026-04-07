import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from '../components/Section';
import { Text } from '../components/Text';

const meta = {
  title: 'Components/Section',
  component: Section,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ background: '#0b1220' }}>
        <Story />
                <Story />
        <Story />

      </div>
    ),
  ],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    headerText: 'Hello World',
    children: <Text> Hello </Text>,
    pageBackground: "#0b1220"
  }
};