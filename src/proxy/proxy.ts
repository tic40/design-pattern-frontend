export function myProxy<T extends object>(person: T) {
  return new Proxy(person, {
    get: (obj: T, prop) => {
      console.log(
        `The value of ${prop.toString()} is ${Reflect.get(obj, prop)}`
      )
    },
    set: (obj: T, prop, value) => {
      console.log(
        `Changed ${prop.toString()} from ${Reflect.get(obj, prop)} to ${value}`
      )
      return Reflect.set(obj, prop, value)
    },
  })
}
