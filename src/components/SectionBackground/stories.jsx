import SectionBackground from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quia enim culpa</p>
      </div>
    ),
    background: true,
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
