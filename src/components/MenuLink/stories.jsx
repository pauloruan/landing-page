import MenuLink from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Menu Link',
    link: 'https://github.com/pauloruan',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
