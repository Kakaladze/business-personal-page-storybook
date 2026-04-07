import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../components/Avatar';
import avatarImg from './assets/mockImageReady.png';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{ background: '#0b1220', boxSizing: 'border-box' }}>
        <Story />
        </div>
    )],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: avatarImg,
    alt: 'Stickman',
    size: '120px'
  }
};