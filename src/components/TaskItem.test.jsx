// @vitest-environment jsdom
import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import TaskItem from './TaskItem.jsx'

test('clicking the checkbox calls onToggle', () => {
  const onToggle = vi.fn()
  const task = { id: '1', title: 'Buy milk', done: false }
  render(<TaskItem task={task} onToggle={onToggle} onDelete={vi.fn()} />)
  expect(screen.getByText('Buy milk')).toBeTruthy()
  fireEvent.click(screen.getByRole('checkbox'))
  expect(onToggle).toHaveBeenCalledWith('1')
})
