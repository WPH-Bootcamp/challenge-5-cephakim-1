// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };

// Define Book type and storage
type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [];

function addBook(title: string, author: string, year: number): void {
  const book: Book = { title, author, year };
  books.push(book);
  console.log(`Book added: "${book.title}" by ${book.author} (${book.year})`);
}

function listBooks(): void {
  console.log('All Books:');
  books.forEach((b) => {
    console.log(`- ${b.title} by ${b.author} (${b.year})`);
  });
}

function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const results = books.filter((b) => b.title.includes(title));

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  results.forEach((b) => {
    console.log(`- ${b.title} by ${b.author} (${b.year})`);
  });
}
addBook('The Sealed Nectar', 'Safi-ur-Rahman al-Mubarakpuri', 1979);
addBook(
  'Muhammad: His Life Based on the Earliest Sources',
  'Martin Lings',
  1983
);
listBooks();
searchBook('Muhammad');
