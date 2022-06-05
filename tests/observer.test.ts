import { observable } from '../src/observer/observable'

test('observable', () => {
  const logger = jest.fn()
  observable.subscribe(logger)
  observable.subscribe(logger)
  observable.subscribe(logger)
  observable.notify('test')
  expect(logger).toHaveBeenCalledWith('test')
  expect(logger).toHaveBeenCalledTimes(3)
})
