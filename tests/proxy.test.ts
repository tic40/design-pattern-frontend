import { myProxy } from '../src/proxy/proxy'

test('call person name and update age.', () => {
  console.log = jest.fn()
  const person = {
    name: 'John Doe',
    age: 20,
    nationality: 'American',
  }

  const personProxy = myProxy(person)
  personProxy.name
  expect(console.log).toHaveBeenCalledWith('The value of name is John Doe')
  personProxy.age = 21
  expect(console.log).toHaveBeenCalledWith('Changed age from 20 to 21')
  personProxy.age
  expect(console.log).toHaveBeenCalledWith('The value of age is 21')
})
