import { Book, BookFactory } from '../src/flyweight/bookFactory'

describe('flyweight test', () => {
  const bookFactory = new BookFactory()

  test('createBook', () => {
    const book1 = bookFactory.createBook('Harry Potter', 'JK Rowling', 'AB123')
    expect(book1.title).toBe('Harry Potter')
    expect(book1.author).toBe('JK Rowling')
    expect(book1.isbn).toBe('AB123')
    expect(bookFactory.size()).toBe(1)
    bookFactory.createBook('Harry Potter', 'JK Rowling', 'AB123')
    expect(bookFactory.size()).toBe(1)
    bookFactory.createBook('The Great Gatsby', 'F. Scott Fitzgerald', 'EF567')
    expect(bookFactory.size()).toBe(2)
  })

  test('addBook', () => {
    const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 'CD345')
    bookFactory.addBook(book1)
    expect(bookFactory.size()).toBe(3)
  })

  test('addBook: already added', () => {
    const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 'CD345')
    expect(() => bookFactory.addBook(book1)).toThrowError(
      new Error('The book is already in the pool.')
    )
  })
})
