import { screen } from '@testing-library/react';
import LogoLink from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="Logo" link="#target" />);
    const heading = screen.getByRole('heading', { name: 'Logo' });
    const link = screen.getByRole('link', { name: 'Logo' });

    expect(heading).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink text="Logo" link="#target" srcImg="image.jpg" />);
    const image = screen.getByRole('img', { name: 'Logo' });

    expect(image).toHaveAttribute('src', 'image.jpg');
  });
});
