interface Tire {
  print: () => string
}

interface Frame {
  print: () => string
}

interface IBicycleFactory {
  makeTire: () => Tire
  makeFrame: () => Frame
}

class NormalTire implements Tire {
  print() {
    return `This is ${this.constructor.name}`
  }
}

class HighendTire implements Tire {
  print() {
    return `This is ${this.constructor.name}`
  }
}

class AlminiumFrame implements Frame {
  print() {
    return `This is ${this.constructor.name}`
  }
}

class CarbonFrame implements Frame {
  print() {
    return `This is ${this.constructor.name}`
  }
}

export class EntryModelFactory implements IBicycleFactory {
  makeTire() {
    return new NormalTire()
  }
  makeFrame() {
    return new AlminiumFrame()
  }
}

export class HighendModelFactory implements IBicycleFactory {
  makeTire() {
    return new HighendTire()
  }
  makeFrame() {
    return new CarbonFrame()
  }
}
