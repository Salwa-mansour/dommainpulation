var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
    //    console.log(e)
        var li = e.target.parentElement;
      // console.log(li)
     li.parentNode.removeChild(li);
    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('navagation to ',e.target.textContent ,'was preverneted');
})