let input = document.querySelectorAll('input');

let button = document.querySelector('button');

let output = document.querySelector('p');

button.addEventListener('click', displayForm);

function displayForm(e) {
    e.preventDefault();

    for (let i = 0; i < input.length; i++) {

        output.innerHTML += input[i].value + '<br/>';
        input[i].value = '';
    }

}