import {
  OrderManager,
  placeOrderCommand,
  cancelOrderCommand,
} from '../src/command/orderManager'

describe('OrderManager', () => {
  test('cancel order', () => {
    const manager = new OrderManager()

    manager.execute(placeOrderCommand('Pad Thai', '1234'))
    expect(manager.orders.length).toBe(1)
    expect(manager.orders[0]).toBe('1234')
    manager.execute(cancelOrderCommand('1234'))
    expect(manager.orders.length).toBe(0)
  })
})
