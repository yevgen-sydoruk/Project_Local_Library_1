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
        let isBorrowed = book.borrows;

        isBorrowed.find((status) =>
            status.returned
                ? returnedBooks.push(book)
                : borrowedBooks.push(book)
        );
    });
    sortedArray.push(borrowedBooks);
    sortedArray.push(returnedBooks);
    return sortedArray;
}

function getBorrowersForBook(book, accounts) {
    let transactions = [];
    const borrowKeys = book.borrows;
    for (let account in accounts) {
        let accountId = accounts[account];
        for (let key in borrowKeys) {
            let keyId = borrowKeys[key];
            if (keyId.id === accountId.id) {
                accountId.returned = keyId.returned;
                if (transactions.length < 10) {
                    transactions.push(accountId);
                }
            }
        }
    }
    return transactions;
}

module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
};
