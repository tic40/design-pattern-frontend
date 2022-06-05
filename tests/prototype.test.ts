import { SuperDog } from '../src/prototype/superDog'

test('super dog bark and fly.', () => {
  console.log = jest.fn()
  const dog = new SuperDog('daisy')
  dog.bark()
  expect(console.log).toHaveBeenCalledWith('Woof!')
  dog.fly()
  expect(console.log).toHaveBeenCalledWith('Flying!')
})