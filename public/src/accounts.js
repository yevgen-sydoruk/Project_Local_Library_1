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

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
};
