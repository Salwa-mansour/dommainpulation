const bookList = document.querySelector('#book-list');

console.log('book-list sibliing is :',bookList.nextSibling);
console.log('book-list sibliing is :',bookList.nextElementSibling);
console.log('book-list  previous sibliing is :',bookList.previousSibling);
console.log('book-list previous sibliing is :',bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML+='<h6>too call for every one else</h6>';