// var titles = document.getElementsByClassName('title');

// titlesArr = Array.from(titles);
// console.log(Array.isArray(titles));
// console.log(Array.isArray(titlesArr));
// titlesArr.forEach(function(item){
//     console.log(item)
// })

// const wrap = document.querySelector('#wrapper');
// console.log(wrap)
const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);
var books = document.querySelector('#book-list li .name');
books = document.querySelectorAll('#book-list li .name');
 console.log(books);
Array.from(books).forEach(function(book){
    // console.log(book.textContent);
    book.textContent+=' (book tilte)';
 
})
const booklist = document.querySelector('#book-list');
// console.log(booklist.innerHTML);
booklist.innerHTML = '<h2>books and more books ..</h2>';
booklist.innerHTML +='<p>this is how yo add </p>';