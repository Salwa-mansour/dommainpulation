//delete book
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        list.removeChild(li);
        // console.log('aha')
    };
});
// add book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //craete elemnt
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deletebtn =document.createElement('span');
// add content
    deletebtn.textContent='delete';
    // deletebtn.classList.add('delete');
    bookName.textContent = value;
    // deletebtn.innerText="delte"
 //append to document
    li.appendChild(bookName);
    li.appendChild(deletebtn);
    list.appendChild(li);
 //add classes
bookName.classList.add('name');
deletebtn.classList.add('delete')




});
//hide books
const hideBooks = document.querySelector('#hide');
// console.log(hideBooks)
hideBooks.addEventListener('change',function(e){
    if(hideBooks.checked){
        // console.log('hi')
        list.style.display = 'none'
    }else{
        list.style.display = 'initial'
    }
});

//filter books(search)
    const searchBar = document.forms['search-books'].querySelector('input');
        searchBar.addEventListener('keyup',function(e){
            const term = e.target.value.toLowerCase();
            const books = list.getElementsByTagName('li')
           Array.from(books).forEach(function(book){
               const title = book.firstElementChild.textContent
                if(title.toLocaleLowerCase().indexOf(term) != -1){
                    book.style.display= "block";
                }else{book.style.display = 'none'}
           })

    })