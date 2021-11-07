'use strict'
let btn = document.getElementById('btn');

function validation(){
    let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // if else condition

    if( email.match(pattern) ){
        form.classList.add("valid");
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address in Valid.';
        text.style.color = 'limegreen';
    } else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = 'Please Enter Valid Email Address';
        text.style.color = 'red';
    }

    if( email == '' ){
        form.classList.remove("valid");
        form.classList.remove('invalid');
        text.innerHTML = '';
    }
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    validation();
});