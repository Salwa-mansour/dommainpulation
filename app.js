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