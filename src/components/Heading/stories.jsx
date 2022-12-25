import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Storybook Heading Component Example in Dark Mode',
    dark: true,
  },
  argTypes: {
    children: { type: 'string' },
    dark: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} dark={true} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  children: 'Storybook Heading Component Example in Light Mode',
  dark: false,
};
