import { fireEvent, screen } from '@testing-library/react';
import Menu from '.';
import { renderTheme } from '../../styles/renderTheme';

import { defaultTheme } from '../../styles/themes/default';
import linksMock from '../NavBar/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const menu = screen.getByRole('navigation', { name: 'Main menu' });
    const logo = screen.getByRole('heading', { name: 'Logo' });

    expect(menu).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: defaultTheme.medias.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: defaultTheme.medias.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: defaultTheme.medias.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: defaultTheme.medias.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);
    const menu = screen.getByRole('navigation', { name: 'Main menu' });
    expect(menu.firstChild).not.toBeInTheDocument();
  });
});
