export class Book {
  title: string
  author: string
  isbn: string

  constructor(title: string, author: string, isbn: string) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }

  print() {
    console.log(`${this.title}, ${this.author}, ${this.isbn}`)
  }
}

export class BookFactory {
  #pool: Map<string, Book>
  constructor() {
    this.#pool = new Map<string, Book>()
  }

  addBook(book: Book) {
    if (this.#pool.has(book.isbn)) {
      throw new Error('The book is already in the pool.')
    }
    this.#pool.set(book.isbn, book)
  }

  createBook(title: string, author: string, isbn: string) {
    const book = this.#pool.get(isbn)
    if (book) return book

    const newBook = new Book(title, author, isbn)
    this.#pool.set(isbn, newBook)
    return newBook
  }

  getBook(isbn: string) {
    return this.#pool.get(isbn)
  }

  size() {
    return this.#pool.size
  }
}
