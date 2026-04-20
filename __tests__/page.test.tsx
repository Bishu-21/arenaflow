import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import Home from '../src/app/page'

// Mock components that might use browser-only APIs or context providers not available in test
vi.mock('@/components/theme-toggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">Theme Toggle</div>,
}))

vi.mock('@/components/razorpay-button', () => ({
  RazorpayButton: ({ children }: { children: React.ReactNode }) => <button data-testid="razorpay-button">{children}</button>,
}))

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}))

test('Landing page renders hero heading', () => {
  render(<Home />)
  const heading = screen.getByText(/Stadium Flow,/i)
  expect(heading).toBeDefined()
})

test('Landing page has CTA buttons', () => {
  render(<Home />)
  const deployButton = screen.getByText(/Deploy ArenaFlow/i)
  expect(deployButton).toBeDefined()
})

test('Landing page renders pricing section', () => {
  render(<Home />)
  const pricingSection = screen.getByText(/Transparent Scaling/i)
  expect(pricingSection).toBeDefined()
})
