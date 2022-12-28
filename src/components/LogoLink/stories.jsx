import LogoLink from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo Link',
    link: 'https://github.com/pauloruan',
    srcImg: 'assets/images/logo.svg',
  },
};

export const WithImage = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const WithText = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

WithText.args = {
  srcImg: '',
};
