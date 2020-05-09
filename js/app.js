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

// TODO Task 2
const tableUsers = document.querySelector('.task2 table');
const formAddingUsers = document.querySelector('.task2 form');
const [inp2, but2] = formAddingUsers.elements; //* положили поле ввода и кнопку

// добавление пользователя через форму и кнопку
but2.addEventListener('click', addingAUserInTable);
function addingAUserInTable() {
    const [name, surname] = inp2.value.trim().split(' ');
    if (name && surname) {
        tableUsers.lastElementChild.insertAdjacentHTML('beforeend', `<tr> <td>${name}</td> <td>${surname}</td> </tr>`);
    }
}

tableUsers.addEventListener('dblclick', editACell);
function editACell(event) {
    const targetCell = event.target.closest('td'); // только td, не th
    let newChange;

    if (targetCell) {
        newChange = prompt('Change?', targetCell.textContent);
        if (newChange) { // если не null
            targetCell.textContent = newChange;
        }
    }
}
// TODO Task 2

// TODO Task 3
const list3 = document.querySelector('.task3 .tree');

list3.addEventListener('click', closeOpenList);
function closeOpenList(event) {
    if (event.target.tagName == 'SPAN') {
        const targetLi = event.target.closest('li');
        const childUl = targetLi.lastElementChild; // последний дочерний узел

        childUl.classList.toggle('hide-show-list');
        setTimeout(() => {
            childUl.classList.toggle('delete-list');
        }, 160);
    }
}
// TODO Task 3

// TODO Task 4

const table4 = document.querySelector('.task4 #grid');
table4.addEventListener('click', (event) => {
    const targetTh = event.target;
    if (targetTh.tagName != 'TH') return;

    sortTable(targetTh.dataset.type);
});

function sortTable(type) {
    const rows = Array.from(table4.rows).slice(1); // массив строк без включения строки заголовка
    const tBody = table4.lastElementChild;

    const sortMethods = {
        number() {
            rows.sort((a, b) => {
                return a.cells[0].textContent - b.cells[0].textContent;
            });
        },
        string() {
            rows.sort((a, b) => {
                return a.cells[1].textContent > b.cells[1].textContent ? 1 : -1;
            });
        }
    };
    sortMethods[type](); // вызываем метод исходя из нажатой ячейки
   
    tBody.append(...rows);
}
// TODO Task 4
