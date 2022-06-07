import { add, multiply } from '../src/module/math'

test('add and multiply via static import', () => {
  expect(add(1, 2)).toBe(3)
  expect(multiply(2, 3)).toBe(6)
})

test('subtract and square via dinamic import', async () => {
  const { subtract, square } = await import('../src/module/math')
  expect(subtract(3, 1)).toBe(2)
  expect(square(4)).toBe(16)
})
