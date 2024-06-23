/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from '@testing-library/react'
import LandingPage from '../page';

describe('LandingPage', () => {
    it('renders LandingPage', () => {
        render(<LandingPage />)

        const { container } = render(<LandingPage />)
        expect(container).toMatchSnapshot()
    })
})