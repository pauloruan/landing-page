import TextComponent from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'Storybook Text Component Example in Light Mode',
    dark: false,
  },
  argTypes: {
    children: { type: 'string' },
    dark: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Light = (args) => <TextComponent {...args} />;
export const Dark = (args) => <TextComponent {...args} dark={true} />;

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Dark.args = {
  children: 'Storybook Text Component Example in Dark Mode',
  dark: true,
};
