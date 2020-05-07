'use strict';

// TODO Task1 
const ul1 = document.querySelector('.task1 > ul');
const but1 = document.querySelector('.task1 > button');
ul1.addEventListener('click', (event) => {
    event.target.closest('li').innerHTML += '!';
});

but1.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = 'new';
    ul1.append(li);
});

// TODO Task1 