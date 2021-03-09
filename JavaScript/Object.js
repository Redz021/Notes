//ES5
let person = {}
Object.defineProperty(person, 'name', { writable: false, value: 'Tom' })
console.log(person.name)
person.name = 'Jack'
console.log(person.name)

let book = {
  _year: 2001,
  edition: 1,
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (val) {
    if (val > 2001) {
      this._year = val
      this.edition = val - 2001
    }
  },
})
book.year = 2010
console.log(book)
