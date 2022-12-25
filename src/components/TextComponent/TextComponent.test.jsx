import { screen } from '@testing-library/react';
import TextComponent from '.';
import { renderTheme } from '../../styles/renderTheme';
import { defaultTheme } from '../../styles/themes/default';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    const text = screen.getByText('Texto');

    expect(text).toBeInTheDocument();
  });

  it('should render with default values', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    const text = screen.getByText(/Texto/i);

    expect(text).toHaveStyle({
      color: defaultTheme.colors.primary,
    });
  });

  it('should render with white color', () => {
    renderTheme(<TextComponent dark>Texto</TextComponent>);
    const text = screen.getByText(/Texto/i);

    expect(text).toHaveStyle({
      color: defaultTheme.colors.white,
    });
  });
});
