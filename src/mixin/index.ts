type Constructor<T = {}> = new (...args: any[]) => T

export function dogFunctionality<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    bark() {
      return 'Woof!'
    }
    wagTail() {
      return 'Wagging my tail!'
    }
    play() {
      return 'Playing!'
    }
  }
}
