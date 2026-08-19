import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

vi.mock('./components/HeroScene', () => ({ default: () => <div data-testid="hero-scene" /> }))
vi.mock('./animations/usePortfolioAnimations', () => ({ usePortfolioAnimations: () => {} }))

describe('portfolio', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the required portfolio sections and CV link', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Chimezie Ifeanyi Samuel', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Intelligence that leaves the lab.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's build something intelligent." })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/Chimezie-Ifeanyi-Samuel-CV.pdf')
  })

  it('filters project cards by category', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Voice AI' }))
    expect(screen.getByRole('heading', { name: 'Conversational AI Voice Agents' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Marketing Multi-Agent System' })).not.toBeInTheDocument()
  })

  it('submits the Netlify contact form and reports success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true })
    render(<App />)
    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'Ada Lovelace' } })
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'ada@example.com' } })
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'Let us build an agent system.' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(await screen.findByText(/message sent. i will get back/i)).toBeInTheDocument()
  })

  it('uses the current contact links and simplified public details', () => {
    render(<App />)
    expect(screen.getByText('Available')).toBeInTheDocument()
    expect(screen.queryByText('Years Experience')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Budget range')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/Csamuels1')
    expect(screen.getByRole('link', { name: 'WhatsApp' })).toHaveAttribute('href', 'https://wa.me/2349074593435')
    expect(screen.getByRole('link', { name: /connect with me on linkedin/i })).toBeInTheDocument()
  })
})
