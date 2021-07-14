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
});