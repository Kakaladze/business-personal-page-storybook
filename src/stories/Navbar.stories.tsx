import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from '../components/Navbar';
import React from 'react';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
decorators: [
    (Story) => (
      <div style={{ background: '#0b1220', height: '700px', width: '100%', boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    activePath: '/',
    items: [
      { label: "Start", path: "/" },
      { label: "Skills", path: "/skills" },
      { label: "Project", path: "/projects" },
      { label: "Contact", path: "/contact" },
    ],
  },
  render: (args) => {
    const [active, setActive] = React.useState('/');

    return (
        <Navbar {...args} activePath={active} onItemClick={(path) => setActive(path)} />
    )
  }
};

export const Overloaded: Story = {
  args: {
    activePath: '/',
    items: [
      { label: "Start", path: "/" },
      { label: "Skills", path: "/skills" },
      { label: "Project", path: "/projects" },
      { label: "Contact", path: "/contact" },
      { label: "Test1", path: "/test1" },
      { label: "Test2", path: "/test2" },
      { label: "Test3", path: "/test2" },
      { label: "Test4", path: "/test4" },
      { label: "Test5", path: "/test5" },
      { label: "Test6", path: "/test6" },
      { label: "Test7", path: "/test7" },
      { label: "Test8", path: "/test8" },
      { label: "Test9", path: "/test9" },
      { label: "Test10", path: "/test10" },
      { label: "Test11", path: "/test11" },
      { label: "Test12", path: "/test12" },
    ],
  },
  render: (args) => {
    const [active, setActive] = React.useState('/');

    return (
        <Navbar {...args} activePath={active} onItemClick={(path) => setActive(path)} />
    )
  }
};

