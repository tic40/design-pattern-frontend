import {
  EntryModelFactory,
  HighendModelFactory,
} from '../src/factory/bicycleFactory'

describe('EntryModel test', () => {
  test('entry', () => {
    const factory = new EntryModelFactory()
    const frame = factory.makeFrame()
    const tire = factory.makeTire()
    expect(frame.print()).toBe('This is AlminiumFrame')
    expect(tire.print()).toBe('This is NormalTire')
  })
})

describe('HighendModel test', () => {
  test('entry', () => {
    const factory = new HighendModelFactory()
    const frame = factory.makeFrame()
    const tire = factory.makeTire()
    expect(frame.print()).toBe('This is CarbonFrame')
    expect(tire.print()).toBe('This is HighendTire')
  })
})
