import Menu from '.';

import linksMock from '../NavBar/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '100vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
