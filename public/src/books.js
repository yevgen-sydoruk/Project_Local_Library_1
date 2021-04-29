function findAuthorById(authors, id) {
    return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
    return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
    let borrowedBooks = [];
    let returnedBooks = [];
    let sortedArray = [];
    books.filter((book) => {
        // console.log(book);
        let isBorrowed = book.borrows;

        isBorrowed.find((status) =>
            status.returned
                ? returnedBooks.push(book)
                : borrowedBooks.push(book)
        );
    });
    sortedArray.push(borrowedBooks);
    sortedArray.push(returnedBooks);
    // console.log(sortedArray);
    return sortedArray;
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
};
