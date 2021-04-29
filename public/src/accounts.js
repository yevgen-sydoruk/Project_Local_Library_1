function findAccountById(accounts, id) {
    return accounts.find((account) => account.id === id); //at least one arrow function + find() native array method
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((accountA, accountB) =>
        accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase()
            ? -1
            : 1
    ); //ternary operator + sort() native arrow method
}

function getTotalNumberOfBorrows(account, books) {
    let total = 0;
    for (let book in books) {
        //let/in used
        if (books[book].borrows.find((borrow) => borrow.id === account.id)) {
            total++;
        }
    }
    return total;
}

function getBooksPossessedByAccount(account, books, authors) {
    // console.log(account.id);
    let booksWithAuthors = books.filter((book) =>
        book.borrows.find(
            (borrow) => borrow.id === account.id && borrow.returned === false
        )
    );
    for (let book in booksWithAuthors) {
        let authorId = booksWithAuthors[book].authorId;

        booksWithAuthors[book].author = authors.find(
            (author) => author.id === authorId
        );
    }
    return booksWithAuthors;
}

module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
};
