let instance: Counter

class Counter {
  counter: number

  constructor() {
    if (instance) throw new Error('You can only create one instance!')
    this.counter = 0
    instance = this
  }

  getInstance() {
    return this
  }

  getCount() {
    return this.counter
  }

  increment() {
    return ++this.counter
  }

  decrement() {
    return --this.counter
  }
}

const singletonCounter = new Counter()
export default singletonCounter
