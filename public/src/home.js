// HELPER FUNCTIONS
function sortItems(array) {
    array.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
    return array;
}

function groupByKeyMapObj(array, key) {
    return array.reduce((acc, obj) => {
        if (acc.get(obj[key]) === undefined) acc.set(obj[key], []);
        acc.get(obj[key]).push(obj);
        return acc;
    }, new Map());
}

// END of HELPER FUNCTIONS

function getTotalBooksCount(books) {
    let count = 0;
    books.map((book) => count++);
    return count;
}

function getTotalAccountsCount(accounts) {
    let count = 0;
    accounts.map((account) => count++);
    return count;
}

function getBooksBorrowedCount(books) {
    let count = 0;
    for (let item in books) {
        let book = books[item];
        if (book.borrows.find((borrow) => !borrow.returned)) {
            count++;
        }
    }
    return count;
}

function getMostCommonGenres(books) {
    let result = [];
    const genres = groupByKeyMapObj(books, "genre");
    for (let [genreTitle, bookInfo] of genres) {
        result.push({
            name: genreTitle,
            count: bookInfo.length,
        });
    }
    sortItems(result);
    result.splice(5);
    return result;
}

function getMostPopularBooks(books) {
    let result = [];
    const booksName = groupByKeyMapObj(books, "title");
    for (let [bookTitle, bookInfo] of booksName) {
        let countedNum = bookInfo.map((book) => book.borrows.length);
        result.push({
            name: bookTitle,
            count: countedNum[0],
        });
    }
    sortItems(result);
    result.splice(5);
    return result;
}

function getMostPopularAuthors(books, authors) {
    let result = [];
    const booksName = groupByKeyMapObj(books, "authorId");
    for (let [authorId, authorBooks] of booksName) {
        let countedNum = authorBooks
            .map((borrow) => borrow.borrows.length)
            .reduce((a, b) => a + b, 0);
        const author = authors.find((author) => author.id === authorId);
        let name = author.name.first + " " + author.name.last;

        result.push({
            name: name,
            count: countedNum,
        });
    }
    sortItems(result);
    result.splice(5);
    return result;
}

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};
