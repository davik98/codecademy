import {
    flattenObjectValuesIntoArray,
    renderBooksToDom,
    structureBookAsHtml as structureBookHtml,
} from "./helper.js";
import { books } from "./bookList.js";

// Click handler for search button
const captureSearchValue = () => {
    return document.querySelector("#search-bar").value;
};

// Filter books based on search input
const filterBooks = (search, books) => {
    const flattenBooks = flattenObjectValuesIntoArray(books);
    const foundBooks = [];
    let found;
    for (let i = 0; i < flattenBooks.length; i++) {
        found =
            flattenBooks[i].findIndex(
                (item) => item.toLowerCase() === search.toLowerCase()
            ) + 1;
        if (found) {
            foundBooks.push(books[i]);
        }
    }
    return foundBooks;
    /*
    return books.filter(book => {
      const flattenBook = flattenObjectValuesIntoArray(book);
      return (
        flattenBook.findIndex(
          (item) => item.toLowerCase() === search.toLowerCase()
        ) + 1
      );
    });
    */
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
const structureBooksAsHtml = (books) => {
    const htmlBooks = books.map((book) => {
        return structureBookHtml(book);
    });
    return htmlBooks;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
    console.log(">>> clicked");
    const searchValue = captureSearchValue();
    console.log(`Search for ${searchValue}`);
    const filteredBooks = filterBooks(searchValue, books);
    console.log(filteredBooks);
    const formattedBooks = structureBooksAsHtml(filteredBooks);
    console.log(formattedBooks);
    renderBooksToDom(formattedBooks);
};

// Grab search button from the DOM

// Attach an event listener to the search button
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
    searchBtnClickHandler(books);
});
