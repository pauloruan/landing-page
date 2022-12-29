import { screen } from '@testing-library/react';
import SectionBackground from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    const container = screen.getByRole('heading', { name: 'Children' });

    expect(container).toBeInTheDocument();
  });

  it('should render with background light', () => {
    renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    const container = screen.getByRole('heading', { name: 'Children' });
    expect(container).toBeInTheDocument();
  });
});
