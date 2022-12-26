import { screen } from '@testing-library/react';
import MenuLink from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Localhost</MenuLink>);
    const link = screen.getByRole('link', { name: 'Localhost' });

    expect(link).toHaveAttribute('target', '_self');
    expect(link).toHaveAttribute('href', 'http://localhost');
  });

  it('should render a link with target _blank', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Localhost
      </MenuLink>,
    );
    const link = screen.getByRole('link', { name: 'Localhost' });

    expect(link).toHaveAttribute('target', '_blank');
  });
});
