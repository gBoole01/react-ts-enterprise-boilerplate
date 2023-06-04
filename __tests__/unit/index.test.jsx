import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/components/Home';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByRole('heading', {
            name: /Hello World!/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
