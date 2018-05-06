//################# LESSON_3
// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');
//
// console.log(search, bookList);
//
// var titles = document.getElementsByClassName("title");
// titles = Array.from(titles);
// titles.forEach((item, index) => {
//   console.log(item);
// });

//################# LESSON_4
// const wrapper = document.querySelector("#wrapper");
// // console.log(wrapper);
//
// const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// // console.log(wmf);
//
// var books = document.querySelector("#book-list li .name");
// console.log(books);
//
// books = document.querySelectorAll("#book-list li .name");
// console.log(books);
//
// Array.from(books).forEach((item) => { console.log(item) });

//################# LESSON_5
// You DON'T need to convert to Array if you use "querySelector"
// but you DO need to convert when using "getElementsBy..."

// books = document.querySelectorAll("#book-list li .name");
// console.log(books);

// Exp converting
// Array.from(books).forEach((item) => { console.log(item) });

// Exp not converting
// books.forEach((item) => { console.log(item) });
//
// books.forEach( (book) => { book.textContent += ", (book title)"; } );
//
// const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML);
//## Replace
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';

//#################### LESSON_6
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner node type is: " + banner.nodeType);
// console.log("#page-banner node name is: " + banner.nodeName);
// console.log("#page-banner has child nodes: " + banner.hasChildNodes());
//
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//#################### LESSON_7
// console.log('the parent node is: ', bookList.parentNode);
// const bookList = document.querySelector("#book-list");
// console.log('the parent element is: ', bookList.parentElement.parentElement);
//
// console.log('the child nodes: ', bookList.childNodes);
// console.log('the children: ',bookList.children);

//################### LESSON_8
// const bookList = document.querySelector("#book-list");
// console.log("bookList next sibling is: ", bookList.nextSibling);
// console.log("bookList next element sibling is: ", bookList.nextElementSibling);
//
// console.log("bookList previous sibling is: ", bookList.previousSibling);
// console.log("bookList previous element sibling is: ", bookList.previousElementSibling);
//
// bookList.previousElementSibling
//   .querySelector('p')
//   .innerHTML += "<br>Too cool for everyone else!";

//##################### LESSON_9: EVENTS
// var h2 = document.querySelector("#book-list h2");
// h2.addEventListener("click", (e) => {
//     console.log(e.target);
//     console.log(e);
// });

// var btns = document.querySelectorAll("#book-list .delete");
//
// Array.from(btns).forEach( (btn) => {
//   btn.addEventListener("click", (e) => {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });
//
const link = document.querySelector("#page-banner a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('navigation to: ', e.target.textContent, 'was prevented');
});

//####################### LESSON_10: Events Bubbling
// ao inves de adicionarmos listeners para todos os botoes adicionamos um listener na "ul" que irá ler o click nos botoes.delete. Desse modo, os novos elementos - ou linhas (li) - adicionados posteriormente também terão o eventListener por ele estar vindo do elemento pai "ul".
//deleteBooks
const list = document.querySelector("#book-list ul");
list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement; // li.parentElementNode.removeChild(li);
    list.removeChild(li);
  }
});

//################### LESSON_11: Interact with Forms
//################### LESSON_12: Creating Elements
//################### LESSON_13: Styles & CSS
//addBooks
const addForm = document.forms['add-book'];
addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // cancela a natureza de submit do form
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);

  //create Elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  // add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  //append to Document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//################### LESSON_14: Attributes
// var book = document.querySelector("li:first-child .name");
// console.log(book);
//
// console.log(book.getAttribute('class'));
// console.log(book.getAttribute('href'));
//
// book.setAttribute('class', 'name-2');
// book.setAttribute('href', 'index.html');
//
// console.log(book.hasAttribute('class'));
// console.log(book.hasAttribute('href'));
//
// book.removeAttribute('class');
// book.removeAttribute('href');
//
// book.setAttribute('class', 'name');
//
// console.log(book);

//################### LESSON_15: CheckBoxes & Change Events
// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
  if (hideBox.checked === true) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});

const searchBar = document.forms['search-books'].querySelector('input');
//################### LESSON_16: Custom Search Filter
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

//################### LESSON_17: Tabbed Content




















/**/
