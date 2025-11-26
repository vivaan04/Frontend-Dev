class Book{
  constructor(title,author,isbn){
    this.title=title
    this.author=author
    this.isbn=isbn
    this.isIssued=false
  }
  issueBook(){
    if(!this.isIssued){this.isIssued=true;return true}
    return false
  }
  returnBook(){this.isIssued=false}
}

const books=[
  new Book('Book A','Author 1','111'),
  new Book('Book B','Author 2','222'),
  new Book('Book C','Author 3','333')
]

function displayAvailable(){
  console.log(books.filter(b=>!b.isIssued))
}

function issueByISBN(isbn){
  const b=books.find(x=>x.isbn===isbn)
  if(b){
    const ok=b.issueBook()
    console.log(ok? 'Issued': 'Already issued')
  } else console.log('Not found')
}

module.exports={Book,books,displayAvailable,issueByISBN}
