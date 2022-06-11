interface ICommand {
  execute: (orders: string[], ...args: any) => void
}

export class OrderManager {
  orders: string[]
  constructor() {
    this.orders = []
  }

  execute(command: ICommand, ...args: any) {
    return command.execute(this.orders, ...args)
  }
}

class Command implements ICommand {
  execute
  constructor(execute: (orders: string[], ...args: any) => void) {
    this.execute = execute
  }
}

export function placeOrderCommand(order: string, id: string) {
  return new Command((orders) => {
    orders.push(id)
    console.log(`You have successfully ordered ${order} (${id})`)
  })
}

export function cancelOrderCommand(id: string) {
  return new Command((orders) => {
    const idx = orders.findIndex((order) => order == id)
    if (idx != -1) {
      orders.splice(idx, 1)
      console.log(`You have canceled your order ${id}`)
    }
  })
}
