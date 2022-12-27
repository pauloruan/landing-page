import { screen } from '@testing-library/react';
import NavBar from '.';
import { renderTheme } from '../../styles/renderTheme';
import { defaultTheme } from '../../styles/themes/default';
import mock from './mock';

describe('<NavBar />', () => {
  it('should render the NavBar', () => {
    renderTheme(<NavBar links={mock} />);
    const navBar = screen.getByRole('navigation');

    expect(navBar).toBeInTheDocument();
    expect(navBar).toHaveStyleRule('flex-flow', 'column wrap', {
      media: defaultTheme.medias.lteMedium,
    });
  });

  it('should render the NavBar with links', () => {
    renderTheme(<NavBar links={mock} />);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(mock.length);
  });

  it('should not render the NavBar with links', () => {
    renderTheme(<NavBar />);
    const links = screen.queryAllByRole('link');

    expect(links).toHaveLength(0);
  });
});
