import { dogFunctionality } from '../src/mixin/index'

test('mixin', () => {
  class Dog {
    name: string
    constructor(name: string) {
      this.name = name
    }
  }
  const FunctionalDog = dogFunctionality(Dog)
  const dog = new FunctionalDog('Lucky')
  expect(dog.bark()).toBe('Woof!')
  expect(dog.wagTail()).toBe('Wagging my tail!')
  expect(dog.play()).toBe('Playing!')
})
