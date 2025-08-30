import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../components/Contact'

// Helper to mock global fetch
const mockFetch = () => {
  const fetchMock = vi.fn(() => Promise.resolve({ ok: true }))
  global.fetch = fetchMock
  return fetchMock
}

// Helper to stub alert
const mockAlert = () => {
  const alertMock = vi.fn()
  global.alert = alertMock
  return alertMock
}

// Helper to suppress console.error in test output
beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterAll(() => {
  console.error.mockRestore()
})

describe('Contact form', () => {
  test('submits mapped fields to Google Form with split date', async () => {
    const fetchSpy = mockFetch()
    const alertSpy = mockAlert()

    render(<Contact />)

    // Fill fields
    await userEvent.type(screen.getByLabelText(/Họ và tên/i), 'Nguyễn Văn A')
    await userEvent.type(screen.getByLabelText(/Số điện thoại/i), '0912345678')

    const dateInput = screen.getByLabelText(/Ngày tổ chức/i)
    // Set date value directly due to date picker restrictions in JSDOM
    fireEvent.change(dateInput, { target: { value: '2025-12-05' } })

    await userEvent.type(screen.getByLabelText(/Lời nhắn/i), 'Xin tư vấn gói tiệc')

    // Submit
    await userEvent.click(screen.getByRole('button', { name: /Gửi thông tin/i }))

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalled()
    })

    // Verify request
    const calledWith = fetchSpy.mock.calls[0]
    const [url, options] = calledWith
    expect(url).toContain('https://docs.google.com/forms')
    expect(options.method).toBe('POST')
    expect(options.mode).toBe('no-cors')
    expect(options.headers['Content-Type']).toContain('application/x-www-form-urlencoded')

    // Parse body to verify params
    const body = options.body
    const params = new URLSearchParams(body)

    expect(params.get('entry.1222129918')).toBe('Nguyễn Văn A')
    expect(params.get('entry.355506656')).toBe('0912345678')
    expect(params.get('entry.1171600566_year')).toBe('2025')
    expect(params.get('entry.1171600566_month')).toBe('12')
    expect(params.get('entry.1171600566_day')).toBe('5')
    expect(params.get('entry.748895279')).toBe('Xin tư vấn gói tiệc')

    // Success alert shown
    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalled()
    })
  })

  test('omits date parts when date is empty', async () => {
    const fetchSpy = mockFetch()

    render(<Contact />)

    await userEvent.type(screen.getByLabelText(/Họ và tên/i), 'B')
    await userEvent.type(screen.getByLabelText(/Số điện thoại/i), '1')
    await userEvent.type(screen.getByLabelText(/Lời nhắn/i), 'Hi')

    await userEvent.click(screen.getByRole('button', { name: /Gửi thông tin/i }))

    await waitFor(() => expect(fetchSpy).toHaveBeenCalled())
    const [, options] = fetchSpy.mock.calls[0]
    const params = new URLSearchParams(options.body)

    expect(params.get('entry.1171600566_year')).toBeNull()
    expect(params.get('entry.1171600566_month')).toBeNull()
    expect(params.get('entry.1171600566_day')).toBeNull()
  })

  test('handles fetch error gracefully', async () => {
    const fetchSpy = vi.fn(() => Promise.reject(new Error('Network error')))
    global.fetch = fetchSpy
    const alertSpy = vi.fn()
    global.alert = alertSpy

    render(<Contact />)

    await userEvent.type(screen.getByLabelText(/Họ và tên/i), 'Test User')
    await userEvent.type(screen.getByLabelText(/Số điện thoại/i), '123456789')

    await userEvent.click(screen.getByRole('button', { name: /Gửi thông tin/i }))

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith('Gửi thông tin thất bại. Vui lòng thử lại.')
    })
  })

  test('resets form after successful submission', async () => {
    const fetchSpy = mockFetch()
    const alertSpy = mockAlert()

    render(<Contact />)

    await userEvent.type(screen.getByLabelText(/Họ và tên/i), 'Reset Test')
    await userEvent.type(screen.getByLabelText(/Số điện thoại/i), '987654321')
    await userEvent.type(screen.getByLabelText(/Lời nhắn/i), 'Reset message')

    await userEvent.click(screen.getByRole('button', { name: /Gửi thông tin/i }))

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalled()
    })

    expect(screen.getByLabelText(/Họ và tên/i).value).toBe('')
    expect(screen.getByLabelText(/Số điện thoại/i).value).toBe('')
    expect(screen.getByLabelText(/Ngày tổ chức/i).value).toBe('')
    expect(screen.getByLabelText(/Lời nhắn/i).value).toBe('')
  })

  test('submits with valid date and checks day parsing', async () => {
    const fetchSpy = mockFetch()

    render(<Contact />)

    await userEvent.type(screen.getByLabelText(/Họ và tên/i), 'Valid Date')
    await userEvent.type(screen.getByLabelText(/Số điện thoại/i), '333333333')

    const dateInput = screen.getByLabelText(/Ngày tổ chức/i)
    fireEvent.change(dateInput, { target: { value: '2025-12-01' } })

    await userEvent.click(screen.getByRole('button', { name: /Gửi thông tin/i }))

    await waitFor(() => expect(fetchSpy).toHaveBeenCalled())
    const [, options] = fetchSpy.mock.calls[0]
    const params = new URLSearchParams(options.body)

    expect(params.get('entry.1171600566_year')).toBe('2025')
    expect(params.get('entry.1171600566_month')).toBe('12')
    expect(params.get('entry.1171600566_day')).toBe('1') // parseInt('01') = 1
  })

  test('submits without message (optional field)', async () => {
    const fetchSpy = mockFetch()

    render(<Contact />)

    await userEvent.type(screen.getByLabelText(/Họ và tên/i), 'No Message')
    await userEvent.type(screen.getByLabelText(/Số điện thoại/i), '222222222')

    await userEvent.click(screen.getByRole('button', { name: /Gửi thông tin/i }))

    await waitFor(() => expect(fetchSpy).toHaveBeenCalled())
    const [, options] = fetchSpy.mock.calls[0]
    const params = new URLSearchParams(options.body)

    expect(params.get('entry.748895279')).toBe('')
  })
})
