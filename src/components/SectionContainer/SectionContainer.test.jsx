import { screen } from '@testing-library/react';
import SectionContainer from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    const container = screen.getByRole('heading', { name: 'Children' });
    expect(container).toBeInTheDocument();
  });
});
