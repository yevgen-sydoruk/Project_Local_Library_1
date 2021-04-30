// HELPER FUNCTIONS
function sortItems(array) {
    array.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
    return array;
}

function groupByKey(array, key) {
    return array.reduce((acc, obj) => {
        if (acc[obj[key]] === undefined) acc[obj[key]] = [];
        acc[obj[key]].push(obj);
        return acc;
    }, {});
}

// HELPER FUNCTIONS

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
        console.log(book);
        if (book.borrows.find((borrow) => !borrow.returned)) {
            count++;
        }
    }
    return count;
}

function getMostCommonGenres(books) {
    let result = [];
    const genres = groupByKey(books, "genre");
    for (let genreName in genres) {
        result.push({
            name: genreName,
            count: genres[genreName].length,
        });
    }
    sortItems(result);
    result.splice(5);
    return result;
}

function getMostPopularBooks(books) {
    let result = [];
    const booksName = groupByKey(books, "title");
    for (let book in booksName) {
        result.push({
            name: book,
            count: booksName[book][0].borrows.length,
        });
    }

    sortItems(result);
    result.splice(5);
    return result;
}

function getMostPopularAuthors(books, authors) {
    let result = [];
    const booksName = groupByKey(books, "authorId");
    console.log(booksName);
    for (let book in booksName) {
        result.push({
            name: book,
            count: booksName[book][0].borrows.length,
        });
    }

    sortItems(result);
    result.splice(5);
    // return result;
}

module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
};
