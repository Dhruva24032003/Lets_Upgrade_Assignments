/*Day 5 Assignment 
Make a div 
Mention some colors in UI in options 
Take input from a user as the option. 
change the color of the div based on the option 
Check for the correct input 
You can also change the text in the div 
 Creativity from your side will be appreciated.*/

let val = document.querySelector('.num');
const doit = document.querySelector('#doit');
const text = document.querySelector('#text');


const onsubmit = function () {

    let checkval = val.value;
    if (checkval == 1) {
        doit.style = 'background-color: red';
        text.innerHTML = ' Now I am RED ';
    }
    if (checkval == 2) {
        doit.style = 'background-color: green';
        text.innerHTML = ' Now I am GREEN ';
    }
    if (checkval == 3) {
        doit.style = 'background-color: white';
        text.innerHTML = ' Now I am WHITE ';
    }
    if (checkval == 4) {
        doit.style = 'background-color: brown';
        text.innerHTML = ' Now I am BROWN';
    }
    if (checkval == 5) {
        doit.style = 'background-color: pink';
        text.innerHTML = ' Now I am PINK ';
    }
    if (checkval > 5 || checkval < 1) {
        alert('Invalid Option!! Please Try Again');
    }

};
document.querySelector('#sub').addEventListener('click', onsubmit);
