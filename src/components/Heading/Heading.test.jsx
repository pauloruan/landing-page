import { screen } from '@testing-library/react';
import Heading from '.';
import { renderTheme } from '../../styles/renderTheme';
import { defaultTheme } from '../../styles/themes/default';

describe('<Heading />', () => {
  it('should render with default values ', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: defaultTheme.colors.secondary,
      'font-size': defaultTheme.fonts.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading dark>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: defaultTheme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': defaultTheme.fonts.sizes.small,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyleRule('font-size', defaultTheme.fonts.sizes.xlarge, {
      media: defaultTheme.medias.lteMedium,
    });
  });

  it('should render uppercase text', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    renderTheme(<Heading as="h1">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto', level: 1 });

    expect(heading.tagName).toBe('H1');
  });
});
